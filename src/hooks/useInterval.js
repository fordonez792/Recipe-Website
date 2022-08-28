import { useEffect, useRef, useCallback } from "react"

const useInterval = (callback, delay) => {
  const callbackRef=useRef(callback)
  const intervalRef=useRef()

  useEffect(() => {
    callbackRef.current=callback
  }, [callback])

  const set = useCallback(() => {
    intervalRef.current=setInterval(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    intervalRef.current && clearInterval(intervalRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}

// Custom hook used to set an interval for the home page automatic image slider

export default useInterval