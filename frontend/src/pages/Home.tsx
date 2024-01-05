import { useState } from "react";
import { DeleteReminderCard } from "../components/DeleteReminderCard";
import RemindersSideBar from "../components/RemindersSideBar";

type Note = {
    id: number;
    content: string;
  };

export default function Home() {
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState<string>('');
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
    const authTokens = localStorage.getItem('@token');

    const getNotesTitles = () => {
        
    }
  
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
        <div style={{ display: 'flex', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
          <div style={{ flex: '0 0 auto' }}>
            <RemindersSideBar />
          </div>
        </div>
      );
};
