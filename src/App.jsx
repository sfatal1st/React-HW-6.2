import { useState, useEffect } from 'react';
import NoteCard from './components/NoteCard';
import AddNoteForm from './components/AddNoteForm';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('http://localhost:7070/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleAddNote = async (content) => {
    try {
      await fetch('http://localhost:7070/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 0,
          content: content
        })
      });
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await fetch(`http://localhost:7070/notes/${id}`, {
        method: 'DELETE'
      });
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div>
      <div className='title-container'>
        <h1>Заметки</h1>
        <button className="update" onClick={fetchNotes}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="green" d="M12 4L4 15h7v6h2v-6h7z" />
          </svg>
       
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="green" d="M12 20L20 9h-7V3h-2v6H4z" />
          </svg>
        </button>
      </div>
      <div className="container">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDeleteNote={handleDeleteNote}
          />
        ))}
      </div>

      <AddNoteForm onAddNote={handleAddNote} />
    </div>
  );
};

export default App;
