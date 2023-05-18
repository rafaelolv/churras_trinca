import React, { useState } from "react";

import AgendaChurras from "../components/AgendaChurras";

import style from '../style/Churras.module.css';

const Eventos = ({ listaChurras }) => {

    console.table(listaChurras);

    return (
        <main className={style.mainEventos}>
            <AgendaChurras listaChurras={listaChurras} />
        </main>
    )
}

export default Eventos;