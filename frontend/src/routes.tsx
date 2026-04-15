import { createBrowserRouter } from 'react-router-dom';
import { BasicLayout } from './layouts/BasicLayout';
import { Home } from './pages/Home';
import { PostsList, PostCreate, PostDetails, PostEdit } from './pages/posts';
import { CategoriesList, CategoryCreate, CategoryDetails, CategoryEdit } from './pages/categories';
import { AccountDashboard } from './pages/accounts/AccountDashboard';
import { Authentication } from './pages/auth/Authentication';

// Post routes, with prefix.
const postRoutes = {
  path: 'posts',
  children: [
    {
      index: true,
      Component: PostsList,
    },
    { path: ':id', Component: PostDetails },
    { path: 'create', Component: PostCreate },
    { path: ':id/edit', Component: PostEdit },
  ],
};

// Category routes, with prefix.
const categoryRoutes = {
  path: 'categories',
  children: [
    {
      index: true,
      Component: CategoriesList,
    },
    { path: ':id', Component: CategoryDetails },
    { path: 'create', Component: CategoryCreate },
    { path: ':id/edit', Component: CategoryEdit },
  ],
};

// Account routes, with prefix.
const accountRoutes = {
  path: 'account',
  children: [
    {
      index: true,
      Component: AccountDashboard,
    },
  ],
};

// Auth routes, with prefix.
const authRoute = { path: 'auth', Component: Authentication };

// Note: create another group of pages when we want to use a different layout.
export const router = createBrowserRouter([
  {
    path: '/',
    Component: BasicLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      postRoutes,
      categoryRoutes,
      accountRoutes,
      authRoute,
    ],
  },
]);
