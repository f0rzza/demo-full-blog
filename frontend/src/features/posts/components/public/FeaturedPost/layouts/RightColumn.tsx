import type { ReactNode } from 'react';

export function RightColumn({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-6 relative">{children}</div>;
}
