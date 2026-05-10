import type { CategoryType } from '@/features/categories/categories.types';
import { SORT_BY } from '@/shared/constants';
import { Select } from './components/Select';
import { Search } from './components/Search';
import type { Filters } from '@/shared/types/common';

export function PostToolbar({
  categories,
  currentFilters,
}: {
  categories: Array<CategoryType>;
  currentFilters: Filters;
}) {
  return (
    <section className="mb-12 bg-surface-container-low p-6 rounded-xl">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
        <Search currentValue={currentFilters.search} />
        {(categories || SORT_BY) && (
          <div className="flex flex-wrap gap-4 w-full lg:w-auto">
            <Select
              title="Category"
              options={categories}
              defaultOptionLabel="All categories"
              name="category"
              currentValue={currentFilters.category}
            />
            <Select
              title="Sort By"
              options={SORT_BY}
              name="sort"
              currentValue={currentFilters.sort}
            />
          </div>
        )}
      </div>
    </section>
  );
}
