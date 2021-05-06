import React from 'react'
import Movie from '../Movie'
import "bootstrap/dist/css/bootstrap.min.css"
import './movies.css'
import { CircleSpinner } from 'react-spinners-kit'

export default function Movies({ results, isLoading, nominations, setNominations }) {
  return (
    <div>
      {isLoading ?
        <div className='center-container'>
          <CircleSpinner />
        </div>
        :
        <div>
          {results ?
            <div className='container-fluid movie-app'>
              <div className='row'>
                {results && results.map((movie) => {
                  return (
                    <Movie movie={movie} nominations={nominations} setNominations={setNominations} />
                  )
                })}
              </div>
            </div>
            :
            <div className='placeholder'> Search for movies! </div>}
        </div>

      }

    </div>

  )
}

