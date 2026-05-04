import type { ErrorFieldType } from '@/shared/types/common';

type Props = { id: string; error: ErrorFieldType };

export function ErrorField({ id, error }: Props) {
  if (!error) {
    return;
  }

  return (
    <div id={id} style={{ color: 'red' }}>
      {error.message}
    </div>
  );
}
