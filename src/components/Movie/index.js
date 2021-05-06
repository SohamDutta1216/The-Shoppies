import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './movie.css'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';

const index = ({ movie, nominations, setNominations }) => {
  function click() {
    setNominations({ ...nominations, [movie.Title]: [movie] })
  }
  console.log(nominations)
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
            <AiOutlineStar data-tip='Nominate this movie' onClick={click} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
