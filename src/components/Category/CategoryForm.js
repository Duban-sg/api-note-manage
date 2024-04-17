import React from "react";
import {Modal, Button } from 'react-bootstrap';
import { postCategory } from "../../services/notesServices";

function CategoryForm({ onAddCategory, onShowModalCategory, onAutor }) {

  const [categoryName, setCategoryName] = React.useState("");
  const [categoryAutor, setCategoryAutor] = React.useState("");

  const handleChangeName = (event) => {
    setCategoryName(event.target.value);
  };
  const handleChangeAutor = (e) => {
    setCategoryAutor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const CategoriasIn = {
      name: categoryName,
      autor: onAutor
    };
    
    try {
      const response = await postCategory({CategoriasIn});
      if (!response.ok) {
        throw new Error("Error al crear una nueva nota");
      } else {
        onAddCategory(categoryName);
        setCategoryName("");
        onShowModalCategory(false);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud de la nueva nota:", error);
    }
  };

  const handleClose = () => onShowModalCategory(false);

  return (
    <>
      <Modal
        show={onShowModalCategory}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Categoria</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
          type="text"
          required
          className="form-control"
          id="categoryName"
          value={categoryName}
          onChange={handleChangeName}
          placeholder="Nombre de la Categoria"
          
        />
        {/* <input
          type="text"
          required
          className="form-control"
          id="categoryAutor"
          value={categoryName}
          onChange={handleChangeAutor}
          placeholder="Autor"
          
        /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Add Categoria</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { CategoryForm };
