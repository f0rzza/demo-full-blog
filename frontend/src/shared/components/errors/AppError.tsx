import type { ApiError } from '@shared/types';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function AppError() {
  const error = useRouteError();

  // Default error
  let status = 500;
  let message = 'An expected error has occured';

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message = error.statusText || error.data;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    const err = error as ApiError;
    status = err.status;
    message = err.message;
  }
  // TODO: if (error instanceof ApiError) ?

  return (
    <>
      <h1>{status}</h1>
      <p>{message}</p>
    </>
  );
}
