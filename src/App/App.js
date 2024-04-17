import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { Category } from "../components/Category";
import { NoteList } from "../components/NoteList";
import { NoteViewer } from "../components/NoteViewer";
import { CategoryForm } from "../components/Category/CategoryForm";
import { useCategory } from "./useCategory";
import { Notesearch } from "../components/NoteSearch";
import { NewNote } from "../components/NoteList/NewNote";
import { MenuCollapse } from "../components/MenuCollapse";
import { useSelector } from "react-redux";
import Collapse from "react-bootstrap/Collapse";

function App() {
  const isOpen = useSelector((state) => state.menuCollapseState.value);

  const {
    categories,
    setCategories,
    showModalNote,
    setShowModalNote,
    handleAddCategory,
    selectedCategory,
    handleSelectCategory,
    handleSelectNote,
    selectedNote,
    searchValue,
    setSearchValue,
    searchedNotes,
    showModalCategory,
    setShowModalCategory,
    handleDeleteNote,
  } = useCategory();

  const handleToggleForm = () => {
    setShowModalNote(true);
  };
  return (
    <div className={isOpen ? "app" : "close"}>
      {/* No eliminar esta seccion, es la mejora visual */}
      <Collapse in={isOpen} dimension="width">
        <div id="example-collapse-text" style={{ minHeight: "fit-content" }}>
          <MenuCollapse>
            <Category
              categories={categories}
              onSelectCategory={handleSelectCategory}
              onShowModalCategory={setShowModalCategory}
            />
          </MenuCollapse>
        </div>
      </Collapse>

      <div style={{ display: isOpen ? "none" : "block" }}></div>

      <div className="note-list">
        <div className="container mt-3 ms-3">
          {showModalCategory && (
            <CategoryForm
              onAddCategory={handleAddCategory}
              onShowModalCategory={setShowModalCategory}
            />
          )}
          {showModalNote && (
            <NewNote
              onAddNote={handleAddCategory}
              onShowModalNote={setShowModalNote}
              categoryId={selectedCategory._id}
              categories={categories}
              setCategories={setCategories}
            />
          )}

          <ul>
            {categories.map(
              (category, index) =>
                selectedCategory &&
                selectedCategory._id === category._id && (
                  <NoteList
                    key={index}
                    notes={category.notes}
                    onNoteSelect={handleSelectNote}
                    searchedNotes={searchedNotes}
                    seachText={searchValue}
                    categoryId={selectedCategory}
                    handleDeleteNote={handleDeleteNote}
                    handleToggleForm={handleToggleForm}
                  >
                    <Notesearch
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                  </NoteList>
                )
            )}
          </ul>
        </div>
      </div>

      <div className="note-viewer">
        {selectedNote != null && (
          <NoteViewer key={selectedNote._id} note={selectedNote} />
        )}
      </div>
    </div>
  );
}

export default App;
