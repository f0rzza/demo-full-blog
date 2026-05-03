import { TitleInput } from './fields/TitleInput';
import { TinyMceEditor } from './fields/TinyMceEditor';
import { PostEditorSidebar } from '@/features/posts/components/admin/forms/PostEditorSidebar';
import type { CreatePostType } from '@/features/posts/posts.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostSchema } from '@shared/schemas';
import { Controller, FormProvider, useForm } from 'react-hook-form';

export function PostForm() {
  // Get form mthods to use in the provider.
  const methods = useForm<CreatePostType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: { title: '', content: '', authorId: 1 },
  });

  const {
    register,
    formState: { errors },
    control,
  } = methods;

  return (
    <FormProvider {...methods}>
      <form className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-16">
        <article className="flex-grow max-w-4xl">
          <TitleInput {...register('title')} error={errors.title} />

          {/* Use Controller composant to control external UI inputs with React Hook Form. */}
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, onBlur, value } }) => (
              <TinyMceEditor
                value={value}
                onBlur={onBlur}
                onEditorChange={onChange}
                error={errors.content}
              />
            )}
          />
        </article>

        <PostEditorSidebar />
      </form>
    </FormProvider>
  );
}
