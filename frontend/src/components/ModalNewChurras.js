import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { createChurras } from "../actions/churrasAction";

import style from "../style/Churras.module.css";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import OutdoorGrillOutlinedIcon from '@mui/icons-material/OutdoorGrillOutlined';

const styleMui = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#FDEE2F',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ModalNewChurras = () => {

    const initialStateChurras = {
        id: uuidv4(),
        data: "",
        descricao: "",
        valorComBebida: "",
        valorSemBebida: "",
        numParticipantes: 0,
        totalArrecadado: 0,
        listaParticipantes: []
    }

    const [churras, setChurras] = useState(initialStateChurras);

    // Estados do modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dispatch = useDispatch();

    // Método usado para setar as informações do novo churras 
    const handleInputChangeChurras = event => {
        const { name, value } = event.target;
        setChurras({ ...churras, [name]: value });
    };

    
    // 
    const cadastrarNovoChurras = () => {

        dispatch(createChurras(churras));
        
        setChurras(initialStateChurras);
    }


    return (
        <>
            <Button onClick={handleOpen} sx={{borderRadius:25 }} ><OutdoorGrillOutlinedIcon sx={{ fontSize: 100, color: '#ce8b54', borderRadius: 25, backgroundColor:'#ffea00' }} /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleMui}>
                    <form className={style.formNewChurras}>
                        <div>
                            <h1><b>Cadastrar churras</b></h1>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="Data">
                                    Data
                                </label><br/>
                                <input type="date" id="data" label="Data" name="data" required value={churras.data} onChange={handleInputChangeChurras}
                                    />
                            </div>
                            <div>
                                <label htmlFor="Descrição">
                                    Descrição
                                </label><br/>
                                <input 
                                    type="text" id="descricao" label="Descrição" name="descricao" required value={churras.descricao}  placeholder="Descrição" onChange={handleInputChangeChurras}
                                    />
                            </div>
                            <div>
                                <label htmlFor="Valor com bebida">
                                    Valor com bebida
                                </label><br/>
                                <input 
                                    type="text" id="valorComBebida" label="Valor com bebida" name="valorComBebida" required value={churras.valorComBebida} placeholder="Valor com bebida" onChange={handleInputChangeChurras}
                                />
                            </div>
                            <div>
                                <label htmlFor="Valor sem bebida">
                                    Valor sem bebida
                                </label><br/>
                                <input 
                                    type="text" id="valorSemBebida" label="Valor sem bebida" name="valorSemBebida" required value={churras.valorSemBebida} placeholder="Valor sem bebida" onChange={handleInputChangeChurras}
                                />
                            </div>
                        </div>
                    </form>
                    <div className={style.divButtonCadastrarNovoChurras}>
                        <button type="submit" onClick={cadastrarNovoChurras}>
                            Cadastrar
                        </button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ModalNewChurras;