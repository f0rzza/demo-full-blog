import { TextAreaField } from '@/features/posts/components/admin/forms/fields/TextAreaField';
import { MultipleSelectField } from '@/features/posts/components/admin/forms/fields/MultipleSelectField';
import { useLoaderData } from 'react-router-dom';
import type { CreatePostPageLoaderType } from '@/pages/admin/posts/createPostLoader';
import { PostButton } from './buttons/PostButton';
import { SelectField } from './fields/SelectField';

export function PostEditorSidebar() {
  const { categories } = useLoaderData<CreatePostPageLoaderType>();

  const fakeUsers = [
    { id: 1, username: 'User1' },
    { id: 2, username: 'User2' },
  ];

  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8">
      <div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-6">
        <PostButton variant="publish" />
        <PostButton variant="draft" />

        <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-outline">
          <span className="font-label text-[10px] uppercase tracking-[0.2em]">Visibility</span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">
            Public
          </span>
        </div>
      </div>

      <div className="space-y-12 px-2">
        <SelectField
          sectionTitle="Author"
          fieldName="authorId"
          options={fakeUsers}
          fieldAsLabel="username"
        />
        <MultipleSelectField
          sectionTitle="Categories"
          fieldName="categories"
          options={categories}
        />
        <TextAreaField
          sectionTitle="Chapo"
          fieldName="chapo"
          placeholder="Brief summary for feed previews..."
        />
      </div>
    </aside>
  );
}
