import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { useMyContext } from '../context/context'
import useFetch from '../hooks/useFetch'
import Loading from '../components/loading'
import logo from '../assets/logo.png'

const url='https://api.spoonacular.com/recipes'

const RecipeInfo = () => {
  const { push }=useMyContext()
  const { id }=useParams()
  const { data, loading, error }=useFetch(`${url}/${id}/information?apiKey=${process.env.REACT_APP_API_KEY1}&includeNutrition=true`)
  const [like, setLike]=useState(false)

  useEffect(() => {
    if(like && data){
      const { id, image, title, readyInMinutes, veryHealthy, servings }=data
      const recipe={ id, image, title, prep: readyInMinutes, healthy: veryHealthy, servings, like }
      push(recipe)
      // If a recipe is liked then the recipe will be moved to favorites array found in context
    }
  }, [like])

  if(error) console.log(error)
  
  if(loading) return <Loading/>

  if(!data) return <h1>No Data Found</h1>

  if(data){
    // Destructuring of the single recipe to have only the useful info
    const { analyzedInstructions, extendedIngredients, image, servings, readyInMinutes, title, dishTypes, diets, nutrition  }=data
    const { steps }=analyzedInstructions[0]
    const { nutrients }=nutrition
    return (
      <section id="recipe-info">
        <div className="container">
          <h1>{title}</h1>
          <article className="image">
            <img src={image} alt={title} />
          </article>
          <article className='info'>
            <div className='contain'>
              <ul className="info-container basic">
                <h2 className="header">Basic Information</h2>
                {servings && <li><small>Servings: </small>{servings}</li>}
                {readyInMinutes && 
                <li><small>Preparation Time: </small>{readyInMinutes} min</li>}
                {diets.length>0 && 
                <li>
                  <small>Diets: </small> 
                  {diets.map((item, index) => {return <span key={index}>{item}</span>})}
                </li>}
                {dishTypes.length>0 && 
                <li>
                  <small>Dish Type: </small> 
                  {dishTypes.map((item, index) => {return <span key={index}>{item}</span>})}
                </li>}
              </ul>
              {nutrients.length>0 &&
              <ul className="info-container basic">
                <h2 className="header">Nutrition</h2>
                {nutrients.map((item, index) => {
                  if(index===0 || index===1 || index===3 || index===5 || index===6 || index===7 || index===8){
                    const { amount, name, unit }=item
                    return (
                      <li key={index}><small>{name}: </small>{amount} {unit}</li>
                    )
                  }
                })}
              </ul>}
            </div>
            {extendedIngredients.length>0 && 
            <ul className="info-container">
              <h2 className='header'>Ingredients</h2>
              {extendedIngredients.map((item, index) => {
                const { original }=item
                return <li key={index}><FaCheck className='check'/> {original}</li>
              })}
            </ul>}
            {steps.length>0 && 
            <ol className='info-container'>
              <h2 className='header'>Instructions</h2>
              {steps.map((item, index) => {
                const { number, step }=item
                return(
                  <li className="single-step" key={index}>
                    <h3>Step {number}</h3>
                    <p>{step}</p>
                  </li>
                )
              })}
            </ol>}
          </article>
          <div className="btn-container">
            <button className="btn" onClick={() => setLike(true)}>Add to Favorites</button>
            <Link to='/recipes' className='btn'>Explore More</Link>
          </div>
        </div>
      </section>
    )
  }
}
// Component will return a detailed explanation of each a single recipe including nutional information, ingredients, and steps to take to cook, all info gathered from api requests. It also has a add to favorites button that will do so, but wont remove it, and an Explore more button that will render the recipes component.

export default RecipeInfo