import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import ReactTooltip from 'react-tooltip';

const index = ({ nominate, removeNomination }) => {
  const movie = nominate[0]

  const click = () => {
    removeNomination(movie.imdbID)
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='Movie' style={{ width: '200px', height: '300px' }} />
          <div className="overlay d-flex align-items-center justify-content-center">
            <ReactTooltip />
            <div className='col'>
              <p className='bio'>{movie.Title}</p>
              <p className='bio'>{movie.Year}</p>
            </div>
            <IoMdRemoveCircleOutline data-tip='Remove' onClick={click} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default index
