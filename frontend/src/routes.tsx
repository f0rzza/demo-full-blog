import { createBrowserRouter } from 'react-router-dom';
import { BasicLayout } from './layouts/BasicLayout';
import { Home } from './pages/Home';
import { PostsList, PostDetails } from './pages/posts';
import { CategoriesList, CategoryDetails } from './pages/categories';
import { AccountDashboard } from './pages/accounts/AccountDashboard';
import { Authentication } from './pages/auth/Authentication';
import { AppError } from './shared/components/errors/AppError';
import {
  AdminCategoriesList,
  AdminCategoryEdit,
  AdminPostCreate,
  AdminPostEdit,
  AdminPostsList,
} from './pages/admin';

// Post routes, with prefix.
const postRoutes = {
  path: 'posts',
  children: [
    {
      index: true,
      Component: PostsList,
    },
    { path: ':id', Component: PostDetails },
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

// Admin routes : management pages.
const adminRoutes = {
  path: 'admin',
  children: [
    // Post routes
    {
      path: 'posts',
      children: [
        // DashboardLayout
        { children: [{ index: true, Component: AdminPostsList }] },
        // PostEditorLayout
        {
          children: [
            { path: 'create', Component: AdminPostCreate },
            { path: ':id/edit', Component: AdminPostEdit },
          ],
        },
      ],
    },
    // Category routes
    {
      path: 'categories',
      children: [
        { index: true, Component: AdminCategoriesList },
        { path: ':id/edit', Component: AdminCategoryEdit },
      ],
    },
  ],
};

// Note: create another group of pages when we want to use a different layout.
export const router = createBrowserRouter([
  {
    path: '/',
    Component: BasicLayout,
    errorElement: <AppError />,
    children: [
      {
        index: true,
        Component: Home,
      },
      postRoutes,
      categoryRoutes,
      accountRoutes,
      authRoute,
      adminRoutes,
    ],
  },
]);
