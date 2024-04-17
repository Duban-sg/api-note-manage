import React from "react";
import "./notelist.css";
import { deleteNote } from "../../services/notesServices";
import { Notesearch } from "../NoteSearch";
function NoteList({
  notes,
  onNoteSelect,
  onDeleteNote,
  handleToggleForm,
  children,
  categoryId
}) {
  const handleDeleteNote = async (noteId) => {
    try {
      const success = await deleteNote(noteId);
      if (success) {
        onDeleteNote(noteId);
        window.location.reload();
      } else {
        console.error("Error: La eliminación de la nota no tuvo éxito");
      }
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };
  return (
    <div className="note-list">
      <div className="row">
        <h3>
          {categoryId.name}
          <span
            className="badge bg-secondary rounded-pill text-white"
            onClick={handleToggleForm}
          >
            +
          </span>
        </h3>
        
      </div>

      <h6>Notas</h6>
      <div>{children}</div>
        
      
      <ul>
        {notes.map((note, index) => (
          <li key={index} onClick={() => onNoteSelect(note)}>
            {note.title}
            {/* <button onClick={() => handleDeleteNote(note._id)}>x</button> */}
            {/* <span  >fecha/</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { NoteList };
