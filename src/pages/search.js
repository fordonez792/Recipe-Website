import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useMyContext } from '../context/context'
import Loading from '../components/loading'
import Searchbar from '../components/searchbar'
import SingleRecipe from '../components/singleRecipe'
import useFetch from '../hooks/useFetch'

const url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY1}&addRecipeInformation=true`

const Search = () => {
  const { search }=useParams()
  const { searchResults, getRecipeInfo, setSearchResults, letter }=useMyContext()

  const { data, loading, error }=useFetch(`${url}&query=${search || letter}`)
  
  if(error) console.log(error)

  useEffect(() => {
    if(data){
      const { results }=data
      const recipes=getRecipeInfo(results)
      setSearchResults(recipes)
    }
  }, [search, data])

  return (
    <section id="search">
      <div className="searchbar-container">
        <Searchbar/>
      </div>
      {loading ? <Loading/> : 
      <div className="search-results">
        {search && <h1 className='header'>Recipe Results for {search}</h1>}
        <div className="results-container">
          {searchResults.map(recipe => {
            return <SingleRecipe key={recipe.id} {...recipe}/>
          })}
        </div>
      </div>}
    </section>
  )
}

export default Search