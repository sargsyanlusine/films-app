import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//action
 import {IFilm} from "../../types/defineFilm";

//types
import {IFilmState} from "./defineTypes";

//request
import fetchFilms from "../../utils/requests";

const initialState: IFilmState = {
    list: [],
    loading: false,
    error: '',
};

const filmReducer = createSlice({
    name: 'film',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchFilms.fulfilled, (state, action:PayloadAction<IFilm[]>) => {
            state.loading = false;
            state.list = action.payload;
            state.error = '';
        })
        builder.addCase(fetchFilms.rejected, (state, action) => {
            state.loading = false;
            state.list = [];
            state.error = action.error.message || 'Something went wrong';
        })
    }
})

export default filmReducer;