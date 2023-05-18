import { RETRIEVE_ALL_CHURRAS, CREATE_CHURRAS, ADD_PARTICIPANTE } from '../actions/actionTypes/churrasActionType';


const list = [
    {
        id: 1,
        data: "12/26/2022",
        descricao: "Natal",
        valorComBebida: 30,
        valorSemBebida: 20,
        numParticipantes: 3,
        totalArrecadado: 80,
        listaParticipantes: [
            { nome: "José", valor:20, confirmado: true }, { nome: "Luiz", valor: 20, confirmado: false }, { nome: "Jason", valor: 20, confirmado: true }
        ]
    },
    {
        id: 2,
        data: "01/01/2023",
        descricao: "ano novo",
        valorComBebida: 20,
        valorSemBebida: 10,
        numParticipantes: 4,
        totalArrecadado: 60,
        listaParticipantes: [
            { nome: "Tommy", valor:20, confirmado: true }, { nome: "Kim", valor: 20, confirmado: true }, { nome: "Zack", valor: 10 }, 
            { nome: "Billy", valor: 10, confirmado: true }
        ]
    },
    {
        id: 3,
        data: "06/26/2023",
        descricao: "Niver empresa",
        valorComBebida: 25,
        valorSemBebida: 10,
        numParticipantes: 5,
        totalArrecadado: 95,
        listaParticipantes: [
            { nome: "Seiya", valor: 25, confirmado: true }, { nome: "Shiryu", valor: 25, confirmado: true }, { nome: "Hyoga", valor: 10, confirmado: true }, 
            { nome: "Shun", valor: 10, confirmado: true }, { nome: "Ikki", valor: 25, confirmado: true }
        ]
    }

];


const initialState = list;

function churrasReducer(churras = initialState, action) {
    
    const { type, payload } = action;

    switch (type) {
        case RETRIEVE_ALL_CHURRAS:
            console.log("Chegou aqui! reducer produto!!!!!");

            console.table(payload);

            return payload;
        
        case CREATE_CHURRAS:
            return [...churras, payload];

        case ADD_PARTICIPANTE:
            console.log("ADD_PARTICIPANTE");
            console.table(payload);
            return payload;

    
        default:
            return churras;
    }
}

export default churrasReducer;