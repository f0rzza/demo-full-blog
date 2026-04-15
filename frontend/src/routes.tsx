import { createBrowserRouter } from 'react-router-dom';

const homeRoute = { path: '/', element: <h1>Homepage</h1> };

// Post routes, with prefix.
const postRoutes = {
  path: 'posts',
  children: [
    {
      index: true,
      element: <h1>List of post</h1>,
    },
    { path: ':id', element: <h1>Post details</h1> },
    { path: 'create', element: <h1>Create new post</h1> },
    { path: ':id/edit', element: <h1>Edit post</h1> },
  ],
};

// Category routes, with prefix.
const categoryRoutes = {
  path: 'categories',
  children: [
    {
      index: true,
      element: <h1>List of categories</h1>,
    },
    { path: ':id', element: <h1>Category details</h1> },
    { path: 'create', element: <h1>Create new category</h1> },
    { path: ':id/edit', element: <h1>Edit category</h1> },
  ],
};

// Account routes, with prefix.
const accountRoutes = {
  path: 'account',
  children: [
    {
      index: true,
      element: <h1>Account dashboard</h1>,
    },
  ],
};

// Auth routes, with prefix.
const authRoute = { path: 'auth', element: <h1>Sign In / Sign Up</h1> };

export const router = createBrowserRouter([
  homeRoute,
  postRoutes,
  categoryRoutes,
  accountRoutes,
  authRoute,
]);
