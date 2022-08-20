import React, { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import SingleRecipe from '../components/singleRecipe'
import Loading from '../components/loading'

const url='https://api.spoonacular.com/recipes'

const RecipeInfo = () => {
  const { id }=useParams()
  const { data, loading }=useFetch(`${url}/${id}/information?apiKey=${process.env.REACT_APP_API_KEY1}`)
  
  if(loading) return <Loading/>
  if(!data) return <h1>No data</h1>
  if(data){
    // Destructuring of the single recipe
    const { analyzedInstructions, extendedIngredients, image, servings, readyInMinutes, title, veryHealthy, veryPopular, dishTypes, diets  }=data
    const { steps }=analyzedInstructions[0]
    return (
      <section id="recipe-info">
        <h1>{title}</h1>
        <article className="image">
          <img src={image} alt={title} />
        </article>
        <article className='info'>
          <ul className="info-container">
            <h2 className="header">Basic Information</h2>
            <li><small>Servings:</small> {servings}</li>
            <li><small>Preparation Time:</small> {readyInMinutes} min</li>
            <li>
              <small>Diets:</small> 
              {diets.map((item, index) => {return <span key={index}>{item}</span>})}
            </li>
            <li>
              <small>Dish Type:</small> 
              {dishTypes.map((item, index) => {return <span key={index}>{item}</span>})}
            </li>
          </ul>
          <ul className="info-container">
            <h2 className='header'>Ingredients</h2>
            {extendedIngredients.map((item, index) => {
              const { original }=item
              return <li key={index}><FaCheck className='check'/> {original}</li>
            })}
          </ul>
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
          </ol>
        </article>
      </section>
    )
  }
}

export default RecipeInfo