import React from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import ReactTooltip from 'react-tooltip';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect"


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
            <BrowserView>
              <img src={movie.Poster} alt='Movie' style={{ width: '100px', height: '150px', marginLeft: '20px' }} />
            </BrowserView>
            <MobileView>

              <img src={movie.Poster} alt='Movie' style={{ width: '20%', height: '79%' }} />

            </MobileView>
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