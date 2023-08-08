import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return (
      <>
      <Router>
        <NavBar/>
        <Routes>
            <Route exact path="/"  element={<News category = "general" key = "general"/>} />                                  
            <Route exact path="/business"   element={<News category = "business" key = "business"/>} />
            <Route exact path="/entertainment"   element={<News category = "entertainment" key = "entertainment"/>} />
            <Route exact path="/general"  element={<News category = "general" key = "general"/>} />
            <Route exact path="/health"  element={<News category = "health" key = "health"/>} />
            <Route exact path="/science"  element={<News category = "science" key = "science"/>} />
            <Route exact path="/sports"  element={<News category = "sports" key = "sports"/>} />
            <Route exact path="/technology"   element={<News category = "technology" key = "technology"/>} />
        </Routes>
       </Router>
      </>
    )
  
}

export default App