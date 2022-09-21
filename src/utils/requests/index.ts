import axios  from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "./api";

const fetchFilms = createAsyncThunk('film/fetchFilms', () => {
    return axios
        .get(BASE_URL)
        .then(response => response.data)
        .catch(err => err.messages);
});
export default  fetchFilms;