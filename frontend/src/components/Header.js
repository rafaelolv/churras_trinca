import React from "react";

import churras from "../imgs/churras.png";

import '../style/Global.module.css';
import style from "../style/HeaderPages.module.css";


const Header = () => {

    return (

        <header className={style.header}>
            <h1>Agenda de Churras</h1>
        </header>
    )
}

export default Header;