import { PublishButton } from '@/features/posts/components/admin/forms/buttons/PublishButton';
import { DraftButton } from '@/features/posts/components/admin/forms/buttons/DraftButton';
import { TextAreaField } from '@/features/posts/components/admin/forms/fields/TextAreaField';
import { SelectField } from '@/features/posts/components/admin/forms/fields/SelectField';
import { useLoaderData } from 'react-router-dom';
import type { CreatePostPageLoaderType } from '@/pages/admin/posts/createPostLoader';

export function PostEditorSidebar() {
  const { categories } = useLoaderData<CreatePostPageLoaderType>();

  return (
    <aside className="w-full lg:w-80 flex flex-col gap-8">
      <div className="bg-surface-container-low p-8 rounded-xl flex flex-col gap-6">
        <PublishButton />
        <DraftButton />

        <div className="pt-4 border-t border-outline-variant/15 flex items-center justify-between text-outline">
          <span className="font-label text-[10px] uppercase tracking-[0.2em]">Visibility</span>
          <span className="font-label text-xs uppercase tracking-widest text-on-surface font-semibold">
            Public
          </span>
        </div>
      </div>

      <div className="space-y-12 px-2">
        <SelectField sectionTitle="Categories" fieldName="categories" options={categories} />
        <TextAreaField
          sectionTitle="Chapo"
          fieldName="chapo"
          placeholder="Brief summary for feed previews..."
        />
      </div>
    </aside>
  );
}
