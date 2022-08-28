import React from 'react'
import Top from './top'
import Bottom from './bottom'

const Home = () => {
  return (
    <section id='home'>
      <Top/>
      <Bottom/>
    </section>
  )
}
// Home component will be separated into 2 smaller files to allow for more clean code

export default Home