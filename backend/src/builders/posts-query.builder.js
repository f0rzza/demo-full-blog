/** Filter functions */

// Post has at least one category in the given list.
function buildCategoryFilter(categories) {
  if (!categories || categories.length === 0) return;
  return { categories: { some: { id: { in: categories } } } };
}

// Post written by an author in the list.
function buildAuthorFilter(authorIds) {
  if (!authorIds || authorIds.length === 0) return;
  return { authorId: { in: authorIds } };
}

// Published, featured, etc
function buildBooleanFilter(name, value) {
  if (value === undefined) return;
  return { [name]: value };
}

// Search each keyword in post title and content.
function buildSearchFilter(keywords) {
  if (!keywords || keywords.length === 0) return null;

  const searchArray = [];
  keywords.forEach((keyword) => {
    searchArray.push({ title: { contains: keyword, mode: 'insensitive' } });
    searchArray.push({ content: { contains: keyword, mode: 'insensitive' } });
  });
  return searchArray;
}

/** Where **/

export function buildWhereClauses({ categories, authors, published, featured, search }) {
  // Use filter(Boolean) to keep only useful clauses.
  const andClauses = [
    buildCategoryFilter(categories),
    buildAuthorFilter(authors),
    buildBooleanFilter('published', published || true),
    buildBooleanFilter('featured', featured),
  ].filter(Boolean);

  // Get search criterias.
  const searchClauses = search ? buildSearchFilter(search) : [];

  return {
    ...(andClauses.length > 0 && { AND: andClauses }),
    ...(searchClauses.length > 0 && { OR: searchClauses }),
  };
}
