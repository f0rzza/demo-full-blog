import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import { TitleInput } from './TitleInput';
import { TinyMceEditor } from './TinyMceEditor';

export function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  // After 'classic' field changes
  function handleChange(e: ChangeEvent) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const { name, value } = target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }

  // After TinyMce changes
  function handleEditorChange(newContent: string) {
    setFormData((prevFormData) => ({ ...prevFormData, content: newContent }));
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('handleSubmit');
  }

  const { title, content } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <article className="flex-grow max-w-4xl">
        <TitleInput title={title} onFormChange={handleChange} />
        <TinyMceEditor content={content} onFormChange={handleEditorChange} />
      </article>
    </form>
  );
}
