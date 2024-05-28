import { createSlice } from '@reduxjs/toolkit'

export const categoriasSlice = createSlice({
  name: 'categorias',
  initialState: {
    value: [],
  },
  reducers: {
    addCategoria: (state,action) => {
      const notasTemp = state.value;
      notasTemp.push({indexIcon: Math.floor(Math.random() * (6 - 0) + 0) ,...action.payload});
      state.value = notasTemp;
    },
    iniciarEstadoCategorias: (state,action) =>{
      const initState =  action.payload?.map((item)=>({indexIcon: Math.floor(Math.random() * (6 - 0) + 0) ,...item}));
      state.value = initState;
    },
    actualizarCategoria: (state,action) =>{
      let initState = state.value;
      initState = initState.map((item)=>{
        if (item._id === action.payload._id) return action.payload;
        return item;
      })
      console.log(initState);
      state.value = initState;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCategoria, iniciarEstadoCategorias, actualizarCategoria} = categoriasSlice.actions

export default categoriasSlice.reducer