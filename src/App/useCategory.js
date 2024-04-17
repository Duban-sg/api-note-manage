import React from "react";
import { getCategory } from "../services/notesServices";

function useCategory() {
  const initialCategories = [
    {
      _id: 1,
      name: "Categoría 1",
      lists: [
        { _id: 1, title: "Lista 1", content: "Contenido de la nota 1" },
        { _id: 2, title: "Lista 2", content: "Contenido de la nota 2" },
      ],
    },
    {
      _id: 2,
      name: "Categoría 2",
      lists: [
        { _id: 3, title: "Lista 3", content: "Contenido de la nota 3" },
        { _id: 4, title: "Lista 4", content: "Contenido de la nota 4" },
      ],
    },
  ];
  const [categories, setCategories] = React.useState([]);
  const [showModalNote, setShowModalNote] = React.useState(false);
  const [showModalCategory, setShowModalCategory] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [selectedNote, setSelectedNote] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [trigger, setTrigger] = React.useState(false);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getCategory();
        
        setCategories(categoryData);
      } catch (error) {
        console.error("Error al obtener las notas:", error);
      }
    };
    fetchData();
    if (trigger) {
      fetchData();
      setTrigger(false); // Restablece el disparador
    }
  },[trigger]);

  const searchedNotes = categories && categories.filter((category) =>
  category.lists && category.lists.some((list) =>
    list.title && list.title.toLowerCase().includes(searchValue.toLowerCase())
  )
);


  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  const handleAddCategory = (newCategoryName) => {
    setTrigger(true);
    // const newCategory = {
    //   _id: categories.length + 1,
    //   name: newCategoryName,
    //   notes: [],
    // };
    // setCategories([...categories, newCategory]);
  };

  const handleSelectCategory = (index) => {
    setSelectedCategory(index);
  };

  const handleDeleteNote = (categoryId, noteId) => {
    
    // Clonar el arreglo de categorías
    const updatedCategories = [...categories];
    // Encontrar la categoría en el arreglo de categorías
    const categoryIndex = updatedCategories.findIndex(
      (category) => category._id === categoryId
    );

    if (categoryIndex !== -1) {
      // Clonar la categoría para evitar mutaciones directas
      const updatedCategory = { ...updatedCategories[categoryIndex] };

      // Filtrar las notas para eliminar la nota específica
      updatedCategory.lists = updatedCategory.lists.filter(
        (note) => note._id !== noteId
      );

      // Actualizar la categoría en el arreglo de categorías
      updatedCategories[categoryIndex] = updatedCategory;

      // Actualizar el estado de las categorías con las categorías actualizadas
      setCategories(updatedCategories);
    }
  };

  return {
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
  };
}

export { useCategory };
