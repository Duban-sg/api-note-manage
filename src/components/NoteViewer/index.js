import React from "react";
import './noteViewer.css';
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
            [name]: value
        });

    };

    

    return (
        <div className="note-viewer">
            <div className="container">

                {editing ? (
                    <>
                        <input
                            type="text"
                            name="title"
                            value={editedNote.title}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="content"
                            value={editedNote.content}
                            onChange={handleInputChange}
                        ></textarea>
                        <button>Guardar</button>
                    </>
                ) : (
                    <>
                        <h2 onClick={handleEdit}>{note.title}</h2>
                        <p onClick={handleEdit}>{note.content}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export { NoteViewer };