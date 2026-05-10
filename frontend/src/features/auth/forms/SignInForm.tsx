import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginInput, type LoginOutput } from '@shared/schemas';
import { FormProvider, useForm, type FieldError, type SubmitHandler } from 'react-hook-form';
import { AuthField } from './fields/AuthField';
import { use } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { ErrorField } from '@/shared/components/ui/form/ErrorField';
import { useNavigate } from 'react-router-dom';

export function SignInForm() {
  const { login } = use(AuthContext);
  const navigate = useNavigate();

  // Get form mthods to use in the provider.
  const methods = useForm<LoginInput, any, LoginOutput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { identifier: '', password: '' },
  });

  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<LoginOutput> = async (data) => {
    const response = await login(data.identifier, data.password);
    console.log('resp', response);

    if (!response) {
      setError('root.serverError', {
        type: 'server',
        message: 'Incorrect credentials.',
      });
      return;
    }

    navigate('/'); // tmp
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Identifier : email or username */}
        <AuthField
          fieldLabel="Identifier"
          fieldName="identifier"
          type="text"
          placeholder="Email or username"
        />
        {/* Password */}
        <div>
          <AuthField
            fieldLabel="Password"
            fieldName="password"
            placeholder="••••••••"
            type="password"
          />
          <a
            className="text-xs font-label font-medium text-primary hover:opacity-70 transition-opacity"
            href="#"
          >
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <div className="pt-4">
          <button className="w-full py-4 bg-primary text-on-primary font-label font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-colors duration-300">
            Login
          </button>
        </div>
      </form>

      {errors.root?.serverError && (
        <ErrorField id="serverError" error={errors.root.serverError as FieldError} />
      )}
    </FormProvider>
  );
}
