import React from 'react'

export default function Movies({ results }) {
  console.log(results)
  return (
    <div>
      {results && results.map((movie) => {
        <>
          <h1>{movie.Title}</h1>
        </>
      })}
    </div>
  )
}

