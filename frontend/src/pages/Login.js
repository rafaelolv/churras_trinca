import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from '../style/Login.module.css';



const Login = () => {

    // 
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    // 
    let navigate = useNavigate();

    // 
    const onChangeLogin = (e) => {
        const login = e.target.value;
        setLogin(login);
    };
    
    // 
    const onChangeSenha = (e) => {
        const senha = e.target.value;
        setSenha(senha);
    };


    // Método encarregado de efetuar o login de usuários
    const efetuarLogin = () => {

        if(login !== "" && senha !== "") {
            console.log(login + " " + senha);
            navigate("/eventos");
        } else {
            console.log("Insira seu login e senha para acessar o sistema");
        }
        
    }


    return (
        <div className={style.mainLogin}>
            <form className={style.formLogin}>
                <div>
                    <label htmlFor="login">
                        Login
                    </label><br/>
                    <input 
                        type="text"
                        id="login"
                        label="Login"
                        name="login"
                        required
                        placeholder="e-mail"
                        value={login}
                        onChange={onChangeLogin}
                        />
                </div>
                <div>
                    <label htmlFor="Senha">
                        Senha
                    </label><br/>
                    <input 
                        type="password"
                        id="senha"
                        label="Senha"
                        name="senha"
                        required
                        placeholder="senha"
                        value={senha}
                        onChange={onChangeSenha}
                        />
                </div>

                <button type="submit" className={style.loginButton} onClick={efetuarLogin}>
                    Entrar
                </button>
            </form>
        </div>
    )
};

export default Login;