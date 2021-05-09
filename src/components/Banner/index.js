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
        <div style={{ display: 'flex' }}>
          <div className='image-container '>
            <img src={movie.Poster} alt='Movie' style={{ width: '120px', height: '170px' }} />
            <div>
              <ReactTooltip />

              <IoMdRemoveCircleOutline data-tip='Remove' onClick={click} />
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default index