import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    status: null,
    formErrors: {},
    carForUpdate: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async () => {
        const {data} = await carService.getAll();
        return data
    }
);

const createAsync = createAsyncThunk(
    'carSlice/create',
    async ({car}, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await carService.create(car);
            // return data
            dispatch(create({car: data}))
        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)

const updateById = createAsyncThunk(
    'calSlice/updateById',
    async ({id, car}, {dispatch, rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
            dispatch(updateCarById({id, car}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id}, {dispatch, rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            dispatch(deleteCarById({id}))
        } catch (e) {
            return rejectWithValue({status: e.message})
        }
    }
)
const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        create: (state, action) => {
            state.cars.push(action.payload.car)
        },
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(value => value.id === action.payload.id);
            state.cars.splice(index, 1)
        },
        updateCarById: (state, action) => {
            const index = state.cars.findIndex(value => value.id === action.payload.id);
            state.cars[index] = {...state.cars[index], ...action.payload.car}
            state.carForUpdate = false
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.status = 'completed'
                state.cars = action.payload
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                console.log('component')
            })
            .addCase(createAsync.rejected, (state, action) => {
                const {status, formErrors} = action.payload;
                state.status = status
                state.formErrors = formErrors
            })
    }
    // extraReducers: {
    //     [getAll.pending]: (state, action) => {
    //         state.status = 'pending'
    //     },
    //     [getAll.fulfilled]: (state, action) => {
    //         state.status = 'done'
    //         state.cars = action.payload
    //     },
    //     [getAll.rejected]: (state, action) => {
    //         state.status = 'error'
    //     },
    //
    //     [createAsync.fulfilled]: (state, action) => {
    //         // state.cars.push(action.payload)
    //         state.status = 'completed'
    //     },
    //     [createAsync.rejected]: (state, action) => {
    //         const {status,formErrors} = action.payload;
    //         state.status = status
    //         state.formErrors = formErrors
    //     },
    // }
});

const {reducer: carReducer, actions: {create, deleteCarById, updateCarById, setCarForUpdate}} = carSlice;
const carActions = {getAll, createAsync, updateById, setCarForUpdate, deleteById}

export {carReducer, carActions}