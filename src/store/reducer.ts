import filmReducer from "./film/film.reducer";

const rootReducer = {
    film: filmReducer.reducer,
};

export default rootReducer;