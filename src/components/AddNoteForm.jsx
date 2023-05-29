import { useState } from 'react';

const AddNoteForm = ({ onAddNote }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() === '') return;
    onAddNote(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        cols="40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Введите текст заметки"
        style={{ resize: 'none' }}
      ></textarea>
      <button type="submit">></button>
    </form>
  );
};

export default AddNoteForm;