import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './movie.css'
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';
import FetchInfo from '../../hooks/fetchInfo'
import Modal from "react-modal";
import { CgClose } from 'react-icons/cg';

export default function Index({ movie, nominations, setNominations }) {
  const [showModal, setShowModal] = useState(false);
  const { idSearch, setId, info } = FetchInfo()

  function click() {
    setNominations({ ...nominations, [movie.imdbID]: [movie] })
  }
  function triggerModal() {
    setShowModal(prev => !prev)
  }
  function modal(e) {
    setId(e.imdbID)
    triggerModal()
    console.log(info)
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <div className='image-container d-flex justify-content-start m-3'>
          <img src={movie.Poster} alt='Movie' style={{ width: '200px', height: '300px' }} onClick={() => modal(movie)} />
          <div className="overlay d-flex align-items-center justify-content-center">
            <ReactTooltip />
            <div className='col'>
              <p className='bio'>{movie.Title}</p>
              <p className='bio'>{movie.Year}</p>
            </div>
            <AiOutlineStar data-tip='Nominate this movie' onClick={click} />

            <Modal
              isOpen={showModal}
              onRequestClose={triggerModal}
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
              shouldCloseOnEsc={
                true}


            >

              <div className='container'>
                <div class="row">
                  <div class="col">

                    <CgClose style={{ height: '20%', width: '30px' }} className='float-right' onClick={triggerModal} />
                    <h5>{info.Title}</h5>

                    <img src={info.Poster} alt='Movie' style={{ width: '150px', height: '200px' }} />

                  </div>
                  <div className='col'>
                    <div >IMDB rating: {info.imdbRating} | Runtime: {info.Runtime} | Rated:  {info.Rated}</div>
                    <div >Cast: {info.Actors}</div>
                    <hr class="solid"></hr>
                    <div style={{ marginTop: '20px' }}>{info.Plot}</div>

                  </div>
                </div>
              </div>

            </Modal>
          </div>
        </div>
      </div>
    </div>
  )
}


