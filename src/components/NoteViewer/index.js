import React from "react";
import "./noteViewer.css";

function NoteViewer({ note, onSaveNote }) {
  const [editing, setEditing] = React.useState(false);
  const [editedNote, setEditedNote] = React.useState({ ...note });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedNote({
      ...editedNote,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="titulo">
        <h2>{note.title}</h2>
      </div>

      <div className="parrafo">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export { NoteViewer };
