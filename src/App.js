import React, { useEffect, useState } from "react";
import CardCategorias from "./components/CardCategorias.js"
import Editor from "./components/Editor.js"
import CardNotas from "./components/CardNotas.js"
import { useDispatch, useSelector } from "react-redux";
import { iniciarEstadoCategorias, addCategoria, actualizarCategoria } from "./store/CategoriasReduce.js";
import { getCategories, postCategorias } from './service/categoria';
import { postNotas, putNotas } from "./service/notas.js";
import CardWelcome from "./components/CardWelcome.js";

export default function App() {
  const categorias = useSelector((state) => state.categorias.value);
  const [categoriaSelected, setCategoria] = useState(null)
  const [notaSelected, setNota] = useState(null)
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
    setCategoria(categoria)
    setNota(null)
  }

  const handleSaveChangeNota= async (nota) => {
    let categoria = await putNotas(nota,categoriaSelected._id,notaSelected._id)
    if (categoria !== undefined) {
      categoria = { indexIcon: categoriaSelected.indexIcon, ...categoria }
      dispatch(actualizarCategoria(categoria));
      setCategoria(categoria)
      setNota(categoria.notes.find((element)=> element._id === notaSelected._id))
    }
  }

  useEffect(() => {
    handleObtenerCategorias();
  }, [])


  return (
    <div className="relative gap-4 grid min-h-[100vh] w-screen pr-4 grid grid-cols-6">
      <CardCategorias
        itemSelected={categoriaSelected?._id}
        onSubmit={addCategoryFuntion}
        onSelectCategory={handleSelectedReduce}
        categorias={categorias}
        name="Duban Sierra" />
      {categoriaSelected ? <>
        <CardNotas
          categorySelected={categoriaSelected}
          notaSelected={notaSelected}
          onSubmit={addNotaFuntion}
          onSelectNota={setNota}
        />
      </> : null}
      {notaSelected ? <Editor nota={notaSelected} onSaveChange={handleSaveChangeNota}></Editor> : null}
      {!notaSelected?<CardWelcome  numColSpan={categoriaSelected?4:5}/>:null}
    </div>
  );
}
