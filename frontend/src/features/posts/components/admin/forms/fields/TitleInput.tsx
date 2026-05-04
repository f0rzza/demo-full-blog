import { ErrorField } from '@/shared/components/ui/form/ErrorField';
import type { ErrorFieldType } from '@/shared/types/common';

export function TitleInput({ error, ...props }: { error: ErrorFieldType }) {
  return (
    <div className="mb-12">
      <input
        className="w-full bg-transparent border-none p-0 text-5xl md:text-7xl font-headline italic tracking-tight placeholder:text-surface-container-high focus:ring-0 focus:outline-none text-on-surface"
        placeholder="Enter your story title..."
        type="text"
        {...props}
      />
      {error && <ErrorField id="title-error" error={error} />}
    </div>
  );
}
