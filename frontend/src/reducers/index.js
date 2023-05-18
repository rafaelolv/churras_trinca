import churras from "./churrasReducer";
// import produtos from "./produtoReducer";
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    churras: churras,
});