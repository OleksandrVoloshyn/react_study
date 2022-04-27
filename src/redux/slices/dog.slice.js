import {createSlice} from "@reduxjs/toolkit";

const initialState = {dogs: [], dogForUpdate: null}

const dogSlice = createSlice({
    name: 'dogSlice',
    initialState,
    reducers: {
        add: (state, action) => {
            const dog = {id: new Date().getTime(), name: action.payload.name}
            state.dogs.push(dog)
        },
        deleteById: (state, action) => {
            const index = state.dogs.findIndex(dog => dog.id === action.payload.id)
            state.dogs.splice(index, 1)
        },
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dogForUpdate
        },
        dogUpdate: (state, action) => {
            const index = state.dogs.findIndex(value => value.id === state.dogForUpdate.id)
            state.dogs[index].name = action.payload.name
            state.dogForUpdate = false
        }
    }
});

const {reducer: dogsReducer, actions: {add, deleteById, setDogForUpdate, dogUpdate}} = dogSlice;

export default dogsReducer
export const actionsDog = {add, deleteById, setDogForUpdate, dogUpdate}