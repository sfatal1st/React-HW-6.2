const NoteCard = ({ note, onDeleteNote }) => {
    const handleDelete = () => {
      onDeleteNote(note.id);
    };
  
    return (
      <div className="note-card">
        <textarea className="note-content" rows="6" cols="25" readOnly={true} style={{border: 'none', resize: 'none', overflow: 'hidden'
    }}>
            {note.content}
        </textarea>
        <button className="delete-button" onClick={handleDelete}>
          Х
        </button>
      </div>
    );
  };
  
export default NoteCard;