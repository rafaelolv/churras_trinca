import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import { addParticipante } from "../actions/churrasAction";

import ModalCadastroParticipante from "../components/ModalCadastroParticipante";

import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { yellow } from '@mui/material/colors';

import Button from '@mui/material/Button';

import Participantes from "../components/Participantes";

import style from "../style/PageList.module.css";


const ListaParticipantes = () => {


    let params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const listaChurras = useSelector(state => state.churras);

    const[churrasEscolhido, setChurrasEscolhido] = useState("");


    // Função utilizada para pegar as informações do churras escolhido
    const getChurrasEscolhido = id => {

        setChurrasEscolhido(listaChurras.find((churras) => {
            return churras.id == id;
        }));
    }

    
    // 
    const getParticipante = (participante) => {

        let listChurrasNewParticipante = [...listaChurras];

        listChurrasNewParticipante.find((churras) => churras.id == params.id).listaParticipantes.push(participante);

        dispatch(addParticipante(listChurrasNewParticipante));

    }

    // 
    useEffect(() => {
        getChurrasEscolhido(params.id);
    }, [params.id]);


    return (
        <main className={style.mainList}>
            <div>
                <header className={style.headerList}>
                    <div className={style.divInfo}>
                        <div className={style.divChurrasDataDesc}>
                            <div>
                                <h2>{churrasEscolhido.data}</h2>
                            </div>
                            <div>
                                <span>
                                    <h1>{churrasEscolhido.descricao}</h1>
                                </span>
                            </div>
                        </div>
                        <div className={style.divIconeAddParticipante}>
                            <ModalCadastroParticipante getParticipante={getParticipante} churrasEscolhido={churrasEscolhido} />
                        </div>
                    </div>
                    <div className={style.divDadosChurras}>
                        <div>
                            <div className={style.divIconeDadosChurras}>
                                <GroupRoundedIcon sx={{ color: '#ffea00' }} />
                            </div>
                            <div>
                                <p>{churrasEscolhido.numParticipantes}</p>    
                            </div>
                        </div>
                        <div>
                            <div className={style.divIconeDadosChurras}>
                                <MonetizationOnRoundedIcon sx={{ color: '#ffea00' }} />
                            </div>
                            <div>
                                <p>R$ {churrasEscolhido.totalArrecadado}</p>
                            </div>
                        </div>    
                    </div>
                </header>
                <Participantes churrasEscolhido={churrasEscolhido} />
            </div>        
        </main>
    )
}

export default ListaParticipantes;