import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './movie.css'

const index = ({ movie }) => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='Movie' style={{ width: '300px', height: '435px' }} />
          <div className="overlay d-flex align-items-center justify-content-center">
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
