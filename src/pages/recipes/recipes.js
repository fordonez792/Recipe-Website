import { cuisines, diets } from "../../assets/images"
import Category from "./category"

const Recipes = () => {
  return (
    <section id="recipes">
      <div className="container">
        <div className="cuisines">
          <h1 className="header">Cuisines</h1>
          <article className="category-container">
            {cuisines.map(item => {
              return <Category key={item.id} {...item}/>
            })}
          </article>
        </div>
        <div className="diets">
          <h1 className="header">Diets</h1>
          <article className="category-container">
            {diets.map(item => {
              return <Category key={item.id} {...item}/>
            })}
          </article>
        </div>
      </div>
    </section>
  )
}

export default Recipes