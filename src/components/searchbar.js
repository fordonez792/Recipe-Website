import { useState, useId, useEffect } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
// import { useMyContext } from '../context/context'
import useDebounce from '../hooks/useDebounce'

function Searchbar() {
  const id=useId()
  const navigate=useNavigate()
  const [search, setSearch]=useState('')
  const debouncedSearch=useDebounce(search, 750)

  const handleSubmit = e => {
    e.preventDefault()
    if(debouncedSearch || search){
      navigate(`/search/${debouncedSearch || search}`)
    }
    setSearch('')
  }

  return (
    <form onSubmit={handleSubmit} className='searchbar-form'>
      <label htmlFor="search" onClick={handleSubmit}><FaSearch/></label>
      <input name='search' id={`${id}--search`} type="text" placeholder='Search...' autoComplete='off' value={search} onChange={e => setSearch(e.target.value)}/>
    </form>
  )
}

export default Searchbar