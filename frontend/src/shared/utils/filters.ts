// Get filter values from specific list.
// Note: T (Filter object), keys (array of T properties)
export function getFilterValues<T>(url: URL, keys: readonly (keyof T)[]) {
  const filters = {} as T;

  keys.forEach((key) => {
    filters[key] = url.searchParams.get(key.toString()) as T[keyof T];
  });

  return filters;
}
