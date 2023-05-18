import React from 'react';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';

import './style/Global.module.css';

import Header from './components/Header';
import Login from './pages/Login';
import Eventos from './pages/Eventos';
import ListaParticipantes from './pages/ListaParticipantes';

export default props => {

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path='/login' element={<Login />} />
				<Route exact path={"/"} element={<Login />} />
				<Route exact path={"/eventos"} element={<Eventos />} />
				<Route exact path={"/lista/:id"} element={<ListaParticipantes />} />
			</Routes>
		</BrowserRouter>
	)
};
