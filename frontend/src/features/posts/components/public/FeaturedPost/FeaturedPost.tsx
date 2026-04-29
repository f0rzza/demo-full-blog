import { Author } from './components/Author';
import { Header } from './components/Header';
import { Images } from './components/Images';
import { RightColumn } from './layouts/RightColumn';
import { LeftColumn } from './layouts/LeftColumn';
import { LinkButton } from '@/shared';

export function FeaturedPost() {
  return (
    <section className="relative px-8 md:px-12 pt-12 pb-24 max-w-[1600px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <LeftColumn>
          <Header />
          <Author />
          <LinkButton label="Read the essay" to="posts/1" />
        </LeftColumn>

        {/* Right column */}
        <RightColumn>
          <Images />
        </RightColumn>
      </div>
    </section>
  );
}
