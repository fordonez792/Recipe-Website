import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <div>
        <h1>Welcome</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum autem id esse expedita explicabo beatae nisi dolor. Laudantium recusandae laborum neque, autem ipsum quis eius ad nesciunt. Dolorum itaque ducimus neque, voluptate, numquam qui architecto mollitia quisquam consectetur dolores facere veritatis explicabo blanditiis ipsa fuga ea sit quod! Repellendus, eius!</p>
        <Link className='btn' to='/recipes'>Explore Recipes</Link>
      </div> 
      <article>
        <h1>Food Scientists</h1>
        <div className='icons'>
            <FaInstagram className="insta"/>
            <FaFacebook className="facebook"/>
            <FaLinkedin className="linkedin"/>
        </div>
      </article>
    </section>
  )
}
// Component will return a normal about us page, with lorem text, and a button to the recipes components, allowing users to explore the recipes found there

export default About