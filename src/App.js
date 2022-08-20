import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/navbar'
import Home from './pages/home/home'
import Favorites from './pages/favorites'
import Search from './pages/search'
import Recipes from './pages/recipes'
import RecipeInfo from './pages/recipeInfo'
import About from './pages/about'
import Error from './pages/error'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/favorites' element={<Favorites/>}/>
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
