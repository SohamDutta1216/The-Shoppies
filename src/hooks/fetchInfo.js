import { useEffect, useState } from 'react';
import axios from 'axios'

export default function FetchInfo() {
  const [idSearch, setId] = useState('')
  const [info, setInfo] = useState([])
  useEffect(() => {
    axios.get(`https://www.omdbapi.com/?apikey=d5633076&i=${idSearch}&plot=short`).then(res => {
      setTimeout(() => {
        const movieData = res.data
        console.log(movieData)
        setInfo(movieData)
      }, 0)
    })
  }, [idSearch])
  return {
    idSearch, setId, info
  }
}