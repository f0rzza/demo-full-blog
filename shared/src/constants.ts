export const POSTS_PER_PAGE = 6;

export const SORT_BY = [
  { id: 'date-desc', name: 'Latest' },
  { id: 'date-asc', name: 'Oldest' },
  { id: 'views-desc', name: 'Most Read' },
];

// Object of roles.
export const Role = {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  USER: 'USER',
} as const;

// Object of statuses.
export const Statuses = {
  ALL: 'all',
  DRAFT: 'draft',
  PUBLISHED: 'published',
} as const;
