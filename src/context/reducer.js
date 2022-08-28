const reducer = (state, action) => {
  const { payload, type }=action 
  const { favoriteRecipes }=state
  if(type==='PUSH'){
    if(favoriteRecipes.some(item => item.id===payload.id)) {
      return {
        favoriteRecipes: [...favoriteRecipes]
      }
      // Checks if recipe is already existing in favorite recipes array
    }
    return {
      favoriteRecipes: [...favoriteRecipes, payload]
      // if not then add the recipe to the state
    }
  }
  if(type==='REMOVE'){
    return {
      favoriteRecipes: [...favoriteRecipes.filter(item => item.id!==payload)]
    }
    // Removes the recipe from state, filtered by id
  }
  if(type==='CLEAR'){
    return {
      favoriteRecipes: []
    }
    // Clears state
  }
}
// This is the reducer function that will be used in the context.js file for the useReducer hook. It will allow for better control over the favorite recipes array

export default reducer