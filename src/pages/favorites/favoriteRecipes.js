import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegClock, FaUsers } from 'react-icons/fa'
import { useMyContext } from '../../context/context'

const FavoriteRecipes = ({ id, image, title, prep, healthy, servings }) => {
  const [like, setLike]=useState(true)
  const { remove }=useMyContext()

  useEffect(() => {
    if(!like){
      remove(id)
    }
  }, [like])

  return (
    <article className='favorites-recipe'>
      <Link to={`/single-recipe/${id}`} className='img-container'>
        <img src={image} alt={title} />
      </Link>
      <div className="info">
        <Link to={`/single-recipe/${id}`} className='favorite-recipe-container'><h1>{title}</h1></Link>
        <div className="favorites-recipe-info">
          <p><FaRegClock/> <span>{prep} min</span></p>
          <p><FaUsers/> <span>{servings} servings</span></p>
        </div>
      </div>
      {healthy && <span className='healthy'>Healthy</span>}
      <div className={`like`} onClick={() => setLike(false)}>
        <FaHeart className={`heart ${like && 'active'}`}/>
      </div>
    </article>
  )
}
// Basically same as the singleRecipe component but only allows to remove likes from recipes, therefore removing them from the favorites tab and array

// Problem with rerendering of singleRecipe component and losing the liked recipes as when the component is unmounted, the likes from each recipe will disapear return to false, therefore removing all recipes from the favorites array and local storage, only solution found was to create a separate component

export default FavoriteRecipes