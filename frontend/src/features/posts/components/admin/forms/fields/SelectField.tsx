import { ErrorField } from '@/shared/components/ui/form/ErrorField';
import { useFormContext, type FieldError } from 'react-hook-form';

type Props = {
  sectionTitle: string;
  fieldName: string;
  options: Array<unknown>;
  selectedValue?: unknown;
  fieldAsLabel: string;
};
// TODO: use 'T' generic type

export function SelectField({ sectionTitle, fieldName, options, fieldAsLabel }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section>
      <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-6">
        {sectionTitle}
      </h3>

      <div className="flex flex-col gap-3">
        <div className="dropdown-content w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          <div className="p-2">
            <select {...register(fieldName)} className="w-full">
              <option value="">Select an author</option>
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option[fieldAsLabel]}
                </option>
              ))}
            </select>

            {errors[fieldName] && (
              <ErrorField id={`${fieldName}-error`} error={errors[fieldName] as FieldError} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
