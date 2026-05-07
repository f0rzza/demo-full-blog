export const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

export const parseBoolean = (value) => {
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return undefined;
};

export const parseCategories = (categories) => {
  if (!categories) return undefined;
  if (typeof categories === 'string') categories = JSON.parse(categories);
  return categories.map((category) => {
    return { id: parseInt(category) };
  });
};

export const parseSort = (sort) => {
  const splittedSort = sort.split('-');

  // Skip sorting if there is not enough data.
  if (splittedSort.length !== 2) return;

  let [criteria, order] = splittedSort;

  // Skip sorting if there is incorrect data.
  if (!['date'].includes(criteria) || !['asc', 'desc'].includes(order)) return;
  // TODO : views-[order]

  // Override 'date' criteria.
  if (criteria === 'date') criteria = 'createdAt';

  return { criteria, order };
};
