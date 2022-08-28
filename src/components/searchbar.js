import { useState, useId } from 'react'
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
    // on submit react will render the search component with the search results according to the search string submitted
  }

  return (
    <form onSubmit={handleSubmit} className='searchbar-form'>
      <label htmlFor="search" onClick={handleSubmit}><FaSearch/></label>
      <input name='search' id={`${id}--search`} type="text" placeholder='Search...' autoComplete='off' value={search} onChange={e => setSearch(e.target.value)}/>
      {search && <FaTimes className='clear' onClick={() => setSearch('')}/>}
    </form>
  )
}
// component will return a reusable search bar with on submit and on click events, with a clear button as well

export default Searchbar