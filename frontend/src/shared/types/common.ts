import type { FieldError } from 'react-hook-form';

export type ErrorFieldType = FieldError | undefined;

export type Filters = { category: string; search: string; sort: string };
