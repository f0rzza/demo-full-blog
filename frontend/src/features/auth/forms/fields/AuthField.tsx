import { ErrorField } from '@/shared/components/ui/form/ErrorField';
import { useFormContext, type FieldError } from 'react-hook-form';

type Props = {
  fieldLabel: string;
  fieldName: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  className?: string;
};

export function AuthField({ fieldLabel, fieldName, type, placeholder }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <label
        className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2"
        htmlFor={fieldName}
      >
        {fieldLabel}
      </label>
      <input
        className="w-full px-0 py-3 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-outline-variant/40 focus:border-primary focus:ring-0 text-on-surface placeholder:text-on-surface-variant/30 transition-all font-body"
        id={fieldName}
        placeholder={placeholder}
        type={type}
        {...register(fieldName)}
      />

      {errors[fieldName] && (
        <ErrorField id={`${fieldName}-error`} error={errors[fieldName] as FieldError} />
      )}
    </div>
  );
}
