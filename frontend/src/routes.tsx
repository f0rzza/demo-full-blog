import { createBrowserRouter } from 'react-router-dom';
// Public pages
import {
  AccountDashboard,
  Authentication,
  CategoriesList,
  CategoryDetails,
  Home,
  homePageLoader,
  PostDetails,
  PostsList,
  postsListPageLoader,
} from './pages/public';
// Admin pages
import {
  AdminCategoriesList,
  AdminCategoryEdit,
  AdminPostCreate,
  AdminPostEdit,
  AdminPostsList,
  adminPostsListPageLoader,
  createPostPageLoader,
} from './pages/admin';
import { AppError } from './shared/components/errors/AppError';
import { BasicLayout, CategoryEditorLayout, DashboardLayout } from './layouts';
import { authLoader } from './shared/utils/loaders';
import { Role } from '@shared/constants';

// Post routes, with prefix.
const postRoutes = {
  path: 'posts',
  children: [
    {
      index: true,
      Component: PostsList,
      loader: postsListPageLoader,
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

// Account route.
const accountRoutes = {
  path: 'account',
  Component: AccountDashboard, // TODO
};

// Favorites route.
const favoriteRoute = {
  path: 'favorites',
  Component: AccountDashboard, // TODO
};

// Auth routes, with prefix.
const authRoute = { path: 'auth', Component: Authentication };

// Admin routes : management pages.
const adminRoutes = {
  path: 'admin',
  // Allow access to management pages only to administrators and editors.
  loader: authLoader(Role.ADMIN, Role.EDITOR),
  Component: DashboardLayout,
  children: [
    // Default admin route.
    { children: [{ index: true, loader: adminPostsListPageLoader, Component: AdminPostsList }] },
    // Post routes
    {
      path: 'posts',
      children: [
        // DashboardLayout
        {
          children: [{ index: true, loader: adminPostsListPageLoader, Component: AdminPostsList }],
        },
        // BasicLayout
        {
          // Component: DashboardLayout,
          children: [
            { path: 'create', Component: AdminPostCreate, loader: createPostPageLoader },
            { path: ':id/edit', Component: AdminPostEdit },
          ],
        },
      ],
    },
    // Category routes
    {
      path: 'categories',
      Component: CategoryEditorLayout,
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
        loader: homePageLoader,
      },
      postRoutes,
      categoryRoutes,
      accountRoutes,
      authRoute,
      adminRoutes,
      favoriteRoute,
    ],
  },
]);
