import React from 'react'
import { useMyContext } from '../context/context'
import SingleRecipe from '../components/singleRecipe'
import useArray from '../hooks/useArray'

const Favorite = () => {
  const { favoriteRecipes }=useMyContext()
  const { array }=useArray(favoriteRecipes)

  console.log(favoriteRecipes, array)

  return (
    <section id="favorites">
      <div className="container">
        <article className="header">
          <h1>Your Favorite Recipes</h1>
        </article>
        <article className="favorites">
          {favoriteRecipes.length>0 ? 
          favoriteRecipes.map(recipe => {
            return <SingleRecipe key={recipe.id} {...recipe}/>
          })
          : <h2>No recipes currently found!</h2>}
        </article>
      </div>
    </section>
  )
}

export default Favorite