import React from 'react'
import { useMyContext } from '../../context/context'
import FavoriteRecipes from './favoriteRecipes'

const Favorite = () => {
  const { favoriteRecipes }=useMyContext()

  return (
    <section id="favorites">
      <div className="container">
        <article className="header">
          <h1>Your Favorite Recipes</h1>
        </article>
        <article className="favorites">
          {favoriteRecipes.length>0 ? 
          favoriteRecipes.map(recipe => {
            return <FavoriteRecipes key={`${recipe.id}-favorite`} {...recipe}/>
          })
          : <div className='no-recipes'><h2>No recipes currently found!</h2></div>}
        </article>
      </div>
    </section>
  )
}
// Component will render the favorites menu option, if there are recipes that have been previously liked then they will be found and displayed in this component

export default Favorite