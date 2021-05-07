import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";


const index = ({ nominate, removeNomination }) => {
  const movie = nominate[0]
  const click = () => {
    removeNomination(movie.Title)
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='Movie' style={{ width: '200px', height: '300px' }} />
          <div className="overlay d-flex align-items-center justify-content-center">
            <div className='col'>
              <p className='bio'>{movie.Title}</p>
              <p className='bio'>{movie.Year}</p>
              <IoMdRemoveCircleOutline onClick={click} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
