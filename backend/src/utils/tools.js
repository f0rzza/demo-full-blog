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
