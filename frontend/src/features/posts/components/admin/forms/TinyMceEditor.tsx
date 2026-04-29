import { Editor } from '@tinymce/tinymce-react';

type Props = {
  content: string;
  onFormChange?: (newContent: string) => void;
};

export function TinyMceEditor({ content, onFormChange }: Props) {
  return (
    <>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        value={content}
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
        onEditorChange={onFormChange}
      />
    </>
  );
}
