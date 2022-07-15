/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CV from './pages/CV';
import Experience from './pages/Experience';
import Suppliers from './pages/Suppliers';
import Health from './pages/Health';
import Events from './pages/Events';

import Logo from './components/Logo';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<span className="header">

				<Logo />
				<NavBar />
			</span>
			<Routes>
				<Route path='/' element={<CV />} />
				<Route path='/trainings' element={<Experience />} />
				<Route path='/sustainability' element={<Suppliers />} />
				<Route path='/health' element={<Health />} />
				<Route path='/events' element={<Events />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>,
	document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
