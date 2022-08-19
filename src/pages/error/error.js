import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section id="error">
      <div className="error-container">
        <h1>Oops!</h1>
        <h2>404 - page not found</h2>
        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <Link to='/' className="btn">Back Home</Link>
      </div>
    </section>
  )
}

export default Error