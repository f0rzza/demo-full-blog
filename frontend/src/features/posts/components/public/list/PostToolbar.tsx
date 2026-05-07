import type { CategoryType } from '@/features/categories/categories.types';
import { SORT_BY } from '@/shared/constants';
import { Select } from './components/Select';
import { Search } from './components/Search';

export function PostToolbar({ categories }: { categories: Array<CategoryType> }) {
  return (
    <section className="mb-12 bg-surface-container-low p-6 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <Search />
        {(categories || SORT_BY) && (
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <Select
              title="Category"
              options={categories}
              defaultOptionLabel="All categories"
              name="category"
            />
            <Select title="Sort By" options={SORT_BY} name="sort" />
          </div>
        )}
      </div>
    </section>
  );
}
