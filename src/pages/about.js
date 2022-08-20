import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about">
      <div>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem id esse expedita explicabo beatae nisi dolor. Laudantium recusandae laborum neque, autem ipsum quis eius ad nesciunt. Dolorum itaque ducimus neque, voluptate, numquam qui architecto mollitia quisquam consectetur dolores facere veritatis explicabo blanditiis ipsa fuga ea sit quod! Repellendus, eius!</p>
        <Link className='btn' to='/recipes'>Explore Recipes</Link>
      </div>
    </section>
  )
}

export default About