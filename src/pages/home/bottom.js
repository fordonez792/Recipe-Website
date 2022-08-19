import { useState, useEffect } from 'react'
import { useMyContext } from '../../context/context'
import useFetch from '../../hooks/useFetch'
import SingleRecipe from '../../components/singleRecipe'
import Loading from '../../components/loading'

const url=`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`

function Bottom() {
  const { getRecipeInfo }=useMyContext()
  const [popularRecipes, setPopularRecipes]=useState([])
  const { data, loading, error }=useFetch(url)

  useEffect(() => {
    if(data){
      const { recipes }=data
      const newRecipes=getRecipeInfo(recipes)
      setPopularRecipes(newRecipes)
    }
  }, [data])

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

export default Bottom