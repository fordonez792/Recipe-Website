import { useCallback, useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [recipes, setRecipes]=useState(() => {
    const jsonValue=window.localStorage.getItem(key)
    if(jsonValue!=null) return JSON.parse(jsonValue)
    if(typeof initialValue==='function') return defaultValue()
    else return defaultValue
  })

  useEffect(() => {
    if(recipes===undefined) return window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify(recipes))
  }, [key, recipes])

  const remove = useCallback(() => {
    setRecipes(undefined)
  }, [])

  return [recipes, setRecipes, remove]
}
// Allows for manipulation of localstorage api

export default useLocalStorage