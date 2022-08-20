import { useState, useRef } from 'react'
import Searchbar from '../../components/searchbar'
import images from '../../assets/images'
import useInterval from '../../hooks/useInterval'

const Top = () => {
  const [index, setIndex]=useState(0)
  const dotsRef=useRef()
  const imagesRef=useRef()

  const { reset }=useInterval(() => {
    Array.from(dotsRef.current.children).forEach(div => {
      div.classList.remove('active')
    })
    if(index>=4){
      setIndex(0)
      dotsRef.current.children[0].classList.add('active')
    }
    if(index<4){
      setIndex(index+1)
      dotsRef.current.children[index+1].classList.add('active')
    }
  }, 20000)

  const handleClick = (number) => {
    setIndex(number)
    Array.from(dotsRef.current.children).forEach(div => {
      div.classList.remove('active')
    })
    dotsRef.current.children[number].classList.add('active')
    reset()
  }

  return (
    <article className='top'>
      <div ref={imagesRef} className="img-container">
        {images.map(image => {
          let position='right'
          if(image.id===index) position='center'
          if(image.id===index-1 || (index===0 && image.id===4)) position='left'
          return (<img className={position} key={image.id} src={image.source}/>)
        })}
      </div>
      <h1>Search Among Our Amazing Recipes</h1>
      <div className="searchbar">
        <Searchbar/>
      </div>
      <div ref={dotsRef} className="div-container">
        <div className='active' onClick={() => handleClick(0)}></div>
        <div onClick={() => handleClick(1)}></div>
        <div onClick={() => handleClick(2)}></div>
        <div onClick={() => handleClick(3)}></div>
        <div onClick={() => handleClick(4)}></div>
      </div>
    </article>
  )
}

export default Top