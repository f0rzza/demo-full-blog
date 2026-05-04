import { Outlet } from 'react-router-dom';

export function CategoryEditorLayout() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16 min-h-screen">
      <header className="mb-16">
        <h1 className="font-headline text-5xl md:text-6xl text-on-surface mb-4">
          Category Management
        </h1>
        <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Organize your editorial taxonomy. Define the thematic pillars that support the modern
          curatorial vision.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <Outlet />
      </div>
    </div>
  );
}
