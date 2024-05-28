import React, { useEffect, useState } from "react";
import CardCategorias from "./components/CardCategorias.js"
import Editor from "./components/Editor.js"
import CardNotas from "./components/CardNotas.js"
import { useDispatch, useSelector } from "react-redux";
import { iniciarEstadoCategorias, addCategoria, actualizarCategoria } from "./store/CategoriasReduce.js";
import { getCategories, postCategorias } from './service/categoria';
import { postNotas } from "./service/notas.js";

export default function App() {
  const categorias = useSelector((state) => state.categorias.value);
  const [categoriaSelected, setCategoria] = useState(null)
  const dispatch = useDispatch();

  const addCategoryFuntion = async (data) => {
    const categorias = await postCategorias(data);
    if (categorias !== undefined) dispatch(addCategoria(categorias));
  }

  const addNotaFuntion = async (data) => {
    let categoria = await postNotas(data, categoriaSelected._id);
    if (categoria !== undefined) {
      categoria = { indexIcon: categoriaSelected.indexIcon, ...categoria }
      dispatch(actualizarCategoria(categoria));
      setCategoria(categoria)
    }
  }

  const handleObtenerCategorias = async () => {
    const categoria = await getCategories();
    if (categoria !== undefined) dispatch(iniciarEstadoCategorias(categoria));
  }

  const handleSelectedReduce = (categoria) => {
    console.log(categoria)
    setCategoria(categoria)
  }

  useEffect(() => {
    handleObtenerCategorias();
  }, [])


  return (
    <div className="relative grid min-h-[100vh] w-screen grid grid-cols-6">
      <CardCategorias
        itemSelected={categoriaSelected?._id}
        onSubmit={addCategoryFuntion}
        onSelectCategory={handleSelectedReduce}
        categorias={categorias}
        name="Duban Sierra" />
      <CardNotas
        categorySelected={categoriaSelected}
        onSubmit={addNotaFuntion}
      />
      <Editor></Editor>
    </div>
  );
}
