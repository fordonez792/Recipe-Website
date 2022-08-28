import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart, FaRegClock, FaUsers } from 'react-icons/fa'
import { useMyContext } from '../context/context'

const SingleRecipe = ({ id, image, title, prep, healthy, servings }) => {
  const { push, remove }=useMyContext()
  const [like, setLike]=useState(false)

  useEffect(() => {
    if(like){
      const recipe={ id, image, title, prep, healthy, servings, like }
      push(recipe)
      // If a recipe is liked then the recipe will be moved to favorites array found in context
    }
    if(!like){
      remove(id)
      // If recipe has like removed then the recipe as well will be removed from the favorites array
    }
  }, [like])

  return (
    <article className='single-recipe'>
      <Link to={`/single-recipe/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="info">
        <Link to={`/single-recipe/${id}`} className='single-recipe-container'><h1>{title}</h1></Link>
        <div className="recipe-info">
          <p><FaRegClock/> <span>{prep} min</span></p>
          <p><FaUsers/> <span>{servings} servings</span></p>
        </div>
      </div>
      {healthy && <span className='healthy'>Healthy</span>}
      <div className='like' onClick={() => setLike(!like)}>
        <FaRegHeart className={`${!like && 'active'}`}/>
        <FaHeart className={`heart ${like && 'active'}`}/>
      </div>
    </article>
  )
}
// Component will return a small card, presentation of a single recipe persay, containing the image, title, time to prepare and amount of servings. On click react will navigate to recipeInfo component to display more information about the clicked recipe, single recipes can also be liked and added to your favorite recipes

export default SingleRecipe