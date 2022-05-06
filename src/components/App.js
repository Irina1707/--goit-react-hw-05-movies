import { Switch, Route } from 'react-router-dom';
import React, { useState } from 'react'
import AppBar from "./AppBar/AppBar";
import Container from './Container/Container';
import HomePage from './Views/HomePage/HomePage';
import MoviesPage from './Views/MoviesPage/MoviesPage';
import MoviesAPI from "./API-servise.js";
import { ToastContainer } from 'react-toastify';
//import MoviesPage from './MoviesPage/MoviesPage';

export default function App() {

  const [searchQuery, setSearchQuery] = useState('');

  const hundleFormSubmit = searchQuery => {
   setSearchQuery(searchQuery);
 }
  return (
    <Container>
      <AppBar />
      <ToastContainer autoClose={3000} />
      <Route exact path="/" >
        <HomePage />
      
      </Route>
      <Route exact path="/movies" >
        < MoviesPage onSubmit={hundleFormSubmit} />
      
      </Route>
    </Container>
  );
};



