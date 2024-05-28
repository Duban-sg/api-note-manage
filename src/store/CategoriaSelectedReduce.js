import { createSlice } from '@reduxjs/toolkit'

export const CategoriaSelectedReduce = createSlice({
  name: 'categoriaSelectedReduce',
  initialState: {
    value: [],
  },
  reducers: {
    selectCategoria: (state,action) => {
      const notasTemp = state.value;
      notasTemp.push({indexIcon: Math.floor(Math.random() * (6 - 0) + 0) ,...action.payload});
      state.value = notasTemp;
    },
    iniciarEstadoCategorias: (state,action) =>{
      const initState =  action.payload?.map((item)=>({indexIcon: Math.floor(Math.random() * (6 - 0) + 0) ,...item}));
      state.value = initState;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCategoria, iniciarEstadoCategorias } = CategoriaSelectedReduce.actions

export default CategoriaSelectedReduce.reducer