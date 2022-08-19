import { useCallback, useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue]=useState(() => {
    const jsonValue=window.localStorage.getItem(key)
    if(jsonValue!=null) return JSON.parse(jsonValue)
    if(typeof initialValue==='function') return defaultValue
    else return defaultValue
  })

  useEffect(() => {
    if(value===undefined) return window.localStorage.removeItem(key)
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  const remove = useCallback(() => {
    setValue(undefined)
  }, [])
}

export default useLocalStorage