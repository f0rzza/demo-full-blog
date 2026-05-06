import type { JSX } from 'react';
import { PaginationLink } from './components/PaginationLink';

// Generate links for the pagination (except prev/next links)
function getLinks(current: number, total: number) {
  const links: Array<JSX.Element> = [];
  for (let i = 1; i < total; i++) {
    links.push(<PaginationLink key={i} page={i} current={current === i} />);
  }
  return links;
}

export function PostPagination({ current, total }: { current: number; total: number }) {
  const links = getLinks(current, total);

  return (
    <nav className="mt-24 flex justify-center items-center gap-2">
      {current != 1 && <PaginationLink page={current - 1} variant="prev" />}
      {links}
      {current != total && <PaginationLink page={current + 1} variant="next" />}
    </nav>
  );
}
