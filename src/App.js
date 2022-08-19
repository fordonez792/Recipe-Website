import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/home/home'
import Favorite from './pages/favorite/favorite'
import Search from './pages/search/search'
import Recipes from './pages/recipes/recipes'
import RecipeInfo from './pages/recipeInfo/recipeInfo'
import About from './pages/about/about'
import Error from './pages/error/error'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/favorites' element={<Favorite/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path='/search/:search' element={<Search/>}/>
        <Route exact path='/recipes' element={<Recipes/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route path='/recipes/:id' element={<RecipeInfo/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  ); 
}

export default App;
