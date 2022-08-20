import React, { useState, useEffect, useContext } from 'react'

export const AppContext=React.createContext()

export const AppProvider = ({ children }) => {
  const [searchResults, setSearchResults]=useState([])
  const [favoriteRecipes, setFavoriteRecipes]=useState([])

  const getRecipeInfo = (object) => {
    const recipes=object.map(item => {
      const { id, image, title, servings, veryHealthy, readyInMinutes }=item
      return { id, image, title, servings, healthy: veryHealthy, prep: readyInMinutes }
    })
    return recipes
  }

  return (
    <AppContext.Provider value={{ getRecipeInfo, setSearchResults, favoriteRecipes, setFavoriteRecipes, searchResults }}>
      {children}
    </AppContext.Provider>
  )
}

export const useMyContext = () => {
  return useContext(AppContext)
}