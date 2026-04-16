import { PostContent } from '../../components/ui/Post/PostContent';
import { PostHero } from '../../components/ui/Post/PostHero';
import { SimilarPosts } from '../../components/ui/Post/SimilarPosts';

export function PostDetails() {
  return (
    <>
      <PostHero />
      <PostContent />
      <SimilarPosts />
    </>
  );
}
