import { TitleInput } from './fields/TitleInput';
import { TinyMceEditor } from './fields/TinyMceEditor';
import { PostEditorSidebar } from '@/layouts/components/sidebars/PostEditorSidebar';
import type { CreatePostType } from '@/features/posts/posts.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostSchema } from '@shared/schemas';
import { Controller, useForm } from 'react-hook-form';

export function PostForm() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    control,
  } = useForm<CreatePostType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: { title: '', content: '', authorId: 1 },
  });

  function onFormSubmit(data: CreatePostType) {
    console.log('submitted data', data);
  }

  return (
    <form
      className="max-w-7xl mx-auto px-8 py-12 flex flex-col lg:flex-row gap-16"
      onSubmit={handleSubmit(onFormSubmit)}
    >
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

      <button type="submit">Submit</button>
      {/* TMP button */}
    </form>
  );
}
