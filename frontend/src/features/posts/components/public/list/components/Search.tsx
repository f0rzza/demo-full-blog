import { useState, type ChangeEvent, type KeyboardEvent } from 'react';

export function Search() {
  const [search, setSearch] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }

  function handleSubmit(e: KeyboardEvent<HTMLInputElement>) {
    // Only when user presses Space key.
    if (e.keyCode === 13) {
      const url = new URL(window.location.href);
      url.searchParams.set('search', search);
      // Delete page parameter to start at the first page.
      url.searchParams.delete('page');
      window.location.href = url.toString();
    }
  }

  return (
    <div className=" w-full lg:max-w-md">
      <div className="flex flex-col gap-1.5 min-w-[180px]">
        <label className="font-manrope text-[10px] uppercase tracking-widest text-outline font-bold px-1">
          Search
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            className="w-full bg-surface-container-lowest border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/30 text-on-surface font-manrope text-sm"
            placeholder="Search in the title, the content..."
            type="text"
            name="search"
            value={search}
            onChange={handleChange}
            onKeyUp={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
