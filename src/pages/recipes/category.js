import { Link } from 'react-router-dom'

const Category = ({ name, source }) => {
  return (
    <div className="category">
      <h1>{name}</h1>
      <Link to={`/recipes/${name}`}>
        <img src={source} alt={name} />
      </Link>
    </div>
  )
}

export default Category