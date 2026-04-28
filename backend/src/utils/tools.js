export const isObjectEmpty = (objectName) => {
  return Object.keys(objectName).length === 0;
};

export const parseBoolean = (value) => {
  if (value === true || value === 'true') return true;
  if (value === false || value === 'false') return false;
  return undefined;
};
