import React from 'react'

export default function Movies({ results }) {
  console.log(results)
  return (
    <div>
      <div >
        {results && results.map((movie) => {
          return (
            <div style={{ textAlign: 'center' }}>
              <img src={movie.Poster} alt='Movie' />
              <p>{movie.Title}</p>
              <p> {movie.Year}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

