import type { ChangeEvent } from 'react';

type Props = {
  title: string;
  onFormChange?: (e: ChangeEvent) => void;
};

export function TitleInput({ title, onFormChange }: Props) {
  return (
    <div className="mb-12">
      <input
        className="w-full bg-transparent border-none p-0 text-5xl md:text-7xl font-headline italic tracking-tight placeholder:text-surface-container-high focus:ring-0 focus:outline-none text-on-surface"
        placeholder="Enter your story title..."
        type="text"
        value={title}
        name="title"
        onChange={onFormChange}
      />
    </div>
  );
}
