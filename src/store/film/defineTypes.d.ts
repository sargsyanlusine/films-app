//types
import {IFilm} from "../../types/defineFilm";

interface IFilmState {
    list: IFilm[];
    error: string;
    loading: boolean;
}