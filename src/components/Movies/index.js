import React from 'react'
import Movie from '../Movie'
import "bootstrap/dist/css/bootstrap.min.css"
import './movies.css'

export default function Movies({ results }) {
  return (
    <div>

      {results ?
        <div className='container-fluid movie-app'>
          <div className='row'>
            {results && results.map((movie) => {
              return (

                <Movie movie={movie} />

              )
            })}
          </div>
        </div>
        :
        <div> Search for movies! </div>}
    </div>

  )
}

