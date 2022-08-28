import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import { useMyContext } from "../../context/context"
import Loading from "../../components/loading"
import SingleRecipe from "../../components/singleRecipe"
import { diets } from "../../assets/images"

const url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY1}&number=10&addRecipeInformation=true`

const CategoryDisplay = () => {
  const { getRecipeInfo }=useMyContext()
  const { category }=useParams()
  const [categoryRecipes, setCategoryRecipes]=useState([])
  const [isDiet, setIsDiet]=useState(undefined)
  const { data, loading, error }=useFetch(`${url}${isDiet ? '&diet' : '&cuisine'}=${category}`)
  // conditional fetching depending on if the category is a diet or not

  if(error) console.log(error)

  useEffect(() => {
    if(data){
      const { results }=data
      const newRecipes=getRecipeInfo(results)
      setCategoryRecipes(newRecipes)
      // uses helper function getRecipeInfo to set the data found in api
    }
  }, [data])

  useEffect(() => {
    if(diets.some(item => item.name===category)) setIsDiet(true)
    else setIsDiet(false)
    // checks if the category clicked is a diet or not
  }, [])

  return (
    <section id="category-display">
      {loading ? <Loading/> :
      <div className="search-results">
        {category && <h1 className="header">{category} {isDiet ? 'Diet' : 'Cuisine'}</h1>}
        <div className="results-container">
          {categoryRecipes.map(item => {
            return <SingleRecipe key={item.id} {...item}/>
          })}
        </div>
      </div>}
    </section>
  )
}

export default CategoryDisplay