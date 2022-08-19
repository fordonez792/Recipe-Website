import React from 'react'
import Searchbar from '../../components/searchbar'
import images from '../../assets/images'

const Top = () => {
  const { id, source }=images[0]
  return (
    <article className='top'>
      <img key={id} src={source} alt="img" />
      <h1>Search Among Our Amazing Recipes</h1>
      <div className="searchbar">
        <Searchbar/>
      </div>
    </article>
  )
}

export default Top