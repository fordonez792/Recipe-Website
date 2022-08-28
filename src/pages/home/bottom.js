import { useState, useEffect } from 'react'
import { useMyContext } from '../../context/context'
import SingleRecipe from '../../components/singleRecipe'
import Loading from '../../components/loading'
import useFetch from '../../hooks/useFetch'

const url=`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10` 

function Bottom() {
  const { getRecipeInfo }=useMyContext()
  const [popularRecipes, setPopularRecipes]=useState([])
  const { data, loading, error }=useFetch(url)
  // fetching for popular recipes in api

  if(error) console.log(error)

  useEffect(() => {
    if(data){
      const { recipes }=data
      const newRecipes=getRecipeInfo(recipes)
      setPopularRecipes(newRecipes)
    }
  }, [data])
  // Sets recipes on popular recipes every time the data is changes an onMount

  return (
    <article className='bottom'>
      <h1 className='header'>Popular Recipes</h1>
      {loading ? <Loading/> :
      <div className="recipe-container">
        {popularRecipes.map(recipe => {
          return <SingleRecipe key={recipe.id} {...recipe}/>
        })}
      </div>}
    </article>
  )
}
// This component will fetch for popular recipes and return the bottom part of the home component, it will render the popular recipes found and provide them through the singleRecipe component in a horizontal slider

export default Bottom