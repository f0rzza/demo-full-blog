import { ErrorField } from '@/shared/components/ui/form/ErrorField';
import type { ErrorFieldType } from '@/shared/types/common';
import { Editor, type IAllProps } from '@tinymce/tinymce-react';

// Get native TinyMce props with correct types and add a custom prop.
// Note: required to satisfy TS when using '...props'.
type Props = Pick<IAllProps, 'value' | 'onBlur' | 'onEditorChange'> & {
  error: ErrorFieldType;
};

export function TinyMceEditor({ error, ...props }: Props) {
  return (
    <div>
      {error && <ErrorField id="content-error" error={error} />}
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        init={{
          height: 500,
          menubar: false, // Masquer le menu, si tu n'en as pas besoin
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'code',
            'fullscreen',
            'insertdatetime',
          ],
          toolbar: [
            'bold italic underline | fontselect fontsizeselect | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | undo redo | fullscreen | code',
          ],
          toolbar_sticky: true, // Barre d'outils fixe en haut
        }}
        {...props}
      />
    </div>
  );
}
