import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart, FaRegClock, FaUsers } from 'react-icons/fa'
import { useMyContext } from '../context/context'
import useArray from '../hooks/useArray'


const SingleRecipe = ({ id, image, title, prep, healthy, servings }) => {
  const { favoriteRecipes, setFavoriteRecipes }=useMyContext()
  const { array, push, filter }=useArray(favoriteRecipes)
  const [like, setLike]=useState(false)

  return (
    <article className='single-recipe'>
      <Link to={`/recipes/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="info">
        <Link to={`/recipes/${id}`} className='single-recipe-container'><h1>{title}</h1></Link>
        <div className="recipe-info">
          <p><FaRegClock/> <span>{prep} min</span></p>
          <p><FaUsers/> <span>{servings} servings</span></p>
        </div>
      </div>
      {healthy && <span className='healthy'>Healthy</span>}
      <div className={`like`} onClick={() => setLike(!like)}>
        <FaRegHeart className={`${!like && 'active'}`}/>
        <FaHeart className={`heart ${like && 'active'}`}/>
      </div>
    </article>
  )
}

export default SingleRecipe