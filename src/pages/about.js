import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about">
      <div>
        <h1>Welcome</h1>
        <p>Welcome to Seven Spices! With the help of the spoonacular API, we can bring to your attention many incredible recipes that you can cook by yourself at home. You will definitely be surprised with your cooking skill after trying some of our recipes. Search among thousands of recipes found here by clicking the button below</p>
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