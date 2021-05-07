import React from 'react'

const index = ({ nominate }) => {
  const movie = nominate[0]
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='Movie' style={{ width: '200px', height: '300px' }} />
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className='col'>
              <p className='bio'>{movie.Title}</p>
              <p className='bio'>{movie.Year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
