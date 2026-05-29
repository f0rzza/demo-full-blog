import { AuthContext } from '@/context/AuthContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserSchema } from '@shared/schemas';
import type { ApiError, CreateUserInput, CreateUserOutput } from '@shared/types';
import { use } from 'react';
import { FormProvider, useForm, type FieldError, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthField } from './fields/AuthField';
import { ErrorField } from '@/shared/components/ui/form/ErrorField';

export function SignUpForm() {
  const { register } = use(AuthContext);
  const navigate = useNavigate();

  const methods = useForm<CreateUserInput, any, CreateUserOutput>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { username: '', email: '', password: '' },
  });

  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  const onSubmit: SubmitHandler<CreateUserOutput> = async (data) => {
    try {
      await register(data);
      navigate(0); // Reload page to display login form.
    } catch (error) {
      const apiError = error as ApiError;
      setError('root.serverError', {
        type: 'server',
        message: apiError.message ?? 'An expected error has occured during creation.',
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <AuthField fieldLabel="Username" fieldName="username" type="text" placeholder="john-doe" />

        {/* Email */}
        <AuthField
          fieldLabel="Email Address"
          fieldName="email"
          type="email"
          placeholder="john-doe@mail.com"
        />

        {/* Password */}
        <AuthField
          fieldLabel="Password"
          fieldName="password"
          type="password"
          placeholder="••••••••"
        />

        <div className="pt-4">
          <button
            className="w-full py-4 bg-primary text-on-primary font-label font-bold uppercase tracking-[0.2em] text-xs hover:bg-primary-container transition-colors duration-300"
            type="submit"
          >
            Create Account
          </button>
        </div>
      </form>

      {errors.root?.serverError && (
        <ErrorField id="serverError" error={errors.root.serverError as FieldError} />
      )}
    </FormProvider>
  );
}
