import { useState, useEffect } from "react"
import axios from 'axios'

const useFetch = (url) => {
  const [loading, setLoading]=useState(false)
  const [data, setData] = useState(null)
  const [error, setError]=useState(null)

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(res => setData(res.data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
};

export default useFetch