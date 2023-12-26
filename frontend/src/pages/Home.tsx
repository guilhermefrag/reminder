import { useState } from "react";
import { DeleteReminderCard } from "../components/DeleteReminderCard";

type Note = {
    id: number;
    content: string;
  };

export default function Home() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState<string>('');
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  
    const addNote = () => {
      if (newNote.trim() !== '') {
        setNotes([...notes, { id: Date.now(), content: newNote }]);
        setNewNote('');
      }
    };
  
    const deleteNote = (note: Note) => {
        setSelectedNote(note);
        setDeleteConfirmationOpen(true);
      };
  
    const confirmDeleteNote = () => {
      if (selectedNote) {
        const updatedNotes = notes.filter((note) => note.id !== selectedNote.id);
        setNotes(updatedNotes);
        setDeleteConfirmationOpen(false);
        setSelectedNote(null);
      }
    };
  
    const closeDeleteCard = () => {
      setDeleteConfirmationOpen(false);
      setSelectedNote(null);
    };
  
    return (
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Beautiful Note App</h1>
        <div style={{ marginBottom: '20px' }}>
          <textarea
            rows={4}
            style={{ width: '100%', marginBottom: '10px' }}
            placeholder="Write a new note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></textarea>
          <button
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={addNote}
          >
            Add Note
          </button>
        </div>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {notes.map((note) => (
            <li
              key={note.id}
              style={{
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {note.content}
              <button
                style={{
                  backgroundColor: '#f44336',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => deleteNote(note)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
  
        {selectedNote && (
        <DeleteReminderCard
            open={deleteConfirmationOpen}
            onClose={closeDeleteCard}
            onDelete={confirmDeleteNote}
        />
        )}
      </div>
    );
};
