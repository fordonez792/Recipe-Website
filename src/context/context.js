import React, { useState, useEffect, useContext, useReducer } from 'react'
import reducer from './reducer'
import useLocalStorage from '../hooks/useLocalStorage'

export const AppContext=React.createContext()

export const AppProvider = ({ children }) => {
  const [recipes, setRecipes]=useLocalStorage('favoriteRecipes', [])
  const [searchResults, setSearchResults]=useState([])
  const [state, dispatch]=useReducer(reducer, {favoriteRecipes: recipes})
  const [letter, setLetter]=useState('')

  useEffect(() => {
    const alphabet='abcdefghijklmnopqrstuvwxyz'
    const random = Math.floor(Math.random() * (27))
    setLetter(alphabet[random])
  }, [])

  const push = (recipe) => {
    dispatch({ type: 'PUSH', payload: recipe })
    // On like of a singleRecipe, it will add it to the state.favoriteRecipes array
  }
  
  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id })
    // On dislike will remove the single recipe from the array
  }

  const clear = () => {
    dispatch({ type: 'CLEAR' })
    // Will clear the array
  }

  useEffect(() => {
    const favoriteRecipes=state.favoriteRecipes
    setRecipes(favoriteRecipes)
    // Will set favoriteRecipes in local storage once the push remove or clear functions are activated
  }, [push, remove, clear])

  const getRecipeInfo = object => {
    const recipes=object.map(item => {
      const { id, image, title, servings, veryHealthy, readyInMinutes }=item
      return { id, image, title, servings, healthy: veryHealthy, prep: readyInMinutes, liked: false }
    })
    return recipes
    // Helper function to retrieve useful recipe info from api
  }

  return (
    <AppContext.Provider value={{ getRecipeInfo, setSearchResults, push, remove, clear, ...state, searchResults, favoriteRecipes: recipes, letter }}>
      {children}
    </AppContext.Provider>
  )
}

export const useMyContext = () => {
  return useContext(AppContext)
}