import type { ChangeEvent } from 'react';

type Props = {
  title: string;
  options: Array<{ id: string | number; name: string }>;
  defaultOptionLabel?: string;
  name: string;
  currentValue: string;
};

export function Select({ title, options, defaultOptionLabel, name, currentValue }: Props) {
  // When an option is selected,
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    // add or override the selected value.
    const url = new URL(window.location.href);
    url.searchParams.set(e.target.name, e.target.value);
    // Delete page parameter to start at the first page.
    url.searchParams.delete('page');
    window.location.href = url.toString();
  }

  return (
    <div className="flex flex-col gap-1.5 min-w-[180px] w-full md:w-auto">
      <label className="font-manrope text-[10px] uppercase tracking-widest text-outline font-bold px-1">
        {title}
      </label>
      <select
        className="bg-surface-container-lowest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 text-on-surface font-manrope text-sm appearance-none"
        name={name}
        onChange={handleChange}
        defaultValue={currentValue}
      >
        {defaultOptionLabel && <option value="">{defaultOptionLabel}</option>}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
