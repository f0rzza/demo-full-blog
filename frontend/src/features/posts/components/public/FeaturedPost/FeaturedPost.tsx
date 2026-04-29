import { Author } from './components/Author';
import { Header } from './components/Header';
import { Images } from './components/Images';
import { RightColumn } from './layouts/RightColumn';
import { LeftColumn } from './layouts/LeftColumn';
import { LinkButton } from '@/shared';
import { useLoaderData } from 'react-router-dom';
import type { HomePageLoaderType } from '@/pages/public/homeLoader';

export function FeaturedPost() {
  const { featuredPost } = useLoaderData<HomePageLoaderType>();

  // If there is are not featured post, hide the section.
  if (!featuredPost) {
    return;
  }

  return (
    <section className="relative px-8 md:px-12 pt-12 pb-24 max-w-[1600px] mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column */}
        <LeftColumn>
          <Header post={featuredPost} />
          <Author post={featuredPost} />
          <LinkButton label="Read the article" to={`posts/${featuredPost.id}`} />
        </LeftColumn>

        {/* Right column */}
        <RightColumn>
          <Images />
        </RightColumn>
      </div>
    </section>
  );
}
