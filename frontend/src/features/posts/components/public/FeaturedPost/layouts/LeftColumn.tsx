import type { ReactNode } from 'react';

export function LeftColumn({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-6 z-10">{children}</div>;
}
