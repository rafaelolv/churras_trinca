import { RETRIEVE_ALL_CHURRAS, CREATE_CHURRAS, ADD_PARTICIPANTE, UPDATE_CHURRAS } from './../actions/actionTypes/churrasActionType';


// 
export const createChurras = (churras) => async (dispatch) => {
    try {
      
      dispatch({
        type: CREATE_CHURRAS,
        payload: churras,
      });

    } catch (err) {
        console.log(err);
    }
};

// 
export const retrieveAllChurras = (listaChurras) => (dispatch) => {
    try {
        // const listChurras = list;

        console.log("retrieveAllChurras");
        console.table(listaChurras);
    
        dispatch({
            type: RETRIEVE_ALL_CHURRAS,
            payload: listaChurras,
        });

    } catch (err) {
      console.log(err);
    }
};

// 
export const addParticipante = (listChurrasNewParticipante) => (dispatch) => {
    try {
      
        dispatch({
          type: ADD_PARTICIPANTE,
          payload: listChurrasNewParticipante,
        });
  
    } catch (err) {
        console.log(err);
    }

};

// 
export const updateDadosChurras = (churrasAtualizado) => (dispatch) => {
    try {
        // console.log("updateDadosChurras");
        // console.table(churrasAtualizado);
      
        dispatch({
          type: UPDATE_CHURRAS,
          payload: churrasAtualizado,
        });
    } catch (err) {
        console.log(err);
    }
}