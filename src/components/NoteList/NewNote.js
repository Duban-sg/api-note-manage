import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { postNotes, putCategory } from '../../services/notesServices';

function NewNote({ onShowModalNote,categoryId, categories, setCategories }) {

const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [autor, setAutor] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newNote = {
      title: name,
      content: content,
      autor: autor
    };

    const updatedCategories = categories.map((category,index) => {
      if (category._id === categoryId) {
        return {
          ...category,
          notes: [...category.notes, newNote]
        };
      }
      return category;
    });
    setCategories(updatedCategories);

    try {
      const response = await postNotes(categoryId,newNote);  
    } catch (error) {
        console.error('Error al guardar la nota:', error);
    }

    setName('');
    setContent('');
    onShowModalNote(false);
  };

  const handleClose = () => {
    setName('');
    setContent('');
    onShowModalNote(false);
  };

  return (
    <>
      <Modal
        show={onShowModalNote}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Nota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Título de la nota"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
          type="text"
          required
          className="form-control"
          id="Autor"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Autor"
          
        />
          <textarea
            placeholder="Cuerpo de la nota"
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Note
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { NewNote };
