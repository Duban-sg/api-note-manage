import { configureStore } from '@reduxjs/toolkit'
import CategoriasReduce from './CategoriasReduce'
import CategoriaSelectedReduce from './CategoriaSelectedReduce'

export default configureStore({
  reducer: {
    categorias: CategoriasReduce,
    categoriaSelectedReduce: CategoriaSelectedReduce,
  },
})