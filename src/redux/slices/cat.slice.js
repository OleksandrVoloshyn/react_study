import {createSlice} from "@reduxjs/toolkit";

const initialState = {cats: [], catForUpdate: null}

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const cat = {id: new Date().getTime(), name: action.payload.name}
            state.cats.push(cat)
        },
        deleteById: (state, action) => {
            const index = state.cats.findIndex(value => value.id === action.payload.id)
            state.cats.splice(index, 1)
        },
        setCatForUpdate: (state, action) => {
            state.catForUpdate = action.payload.catForUpdate
        },
        catUpdate: (state,action) => {
            const index = state.cats.findIndex(value => value.id === state.catForUpdate.id)
            state.cats[index].name = action.payload.name
            state.catForUpdate = false
        }
    }
});

const {reducer: catsReducer, actions: {add, deleteById, setCatForUpdate, catUpdate}} = catSlice;

export default catsReducer
export const actionsCat = {add, deleteById, setCatForUpdate, catUpdate}