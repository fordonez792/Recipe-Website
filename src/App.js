import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/home/home'
import Favorites from './pages/favorites/favorites'
import Search from './pages/search'
import Recipes from './pages/recipes/recipes'
import RecipeInfo from './pages/recipeInfo'
import About from './pages/about'
import Error from './pages/error'
import CategoryDisplay from './pages/recipes/categoryDisplay'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path='/search/:search' element={<Search/>}/>
        <Route exact path='/favorites' element={<Favorites/>}/>
        <Route exact path='/recipes' element={<Recipes/>}/>
        <Route exact path='/single-recipe/:id' element={<RecipeInfo/>}/>
        <Route exact path='/recipes/:category' element={<CategoryDisplay/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  ); 
}

export default App;
