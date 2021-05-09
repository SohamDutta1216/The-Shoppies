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
              contentLabel="My dialog"
              className="mymodal"
              overlayClassName="myoverlay"
              closeTimeoutMS={500}
            >

              <CgClose style={{ height: '50px', width: '30px' }} className='float-right' onClick={triggerModal} />
              <div className='contain'>
                <h1 >{info.Title}</h1>
                <img src={info.Poster} alt='Movie' style={{ width: '200px', height: '300px', }} />

                <div style={{}}>imdb rating: {info.imdbRating}</div>
                <div  >Runtime: {info.Runtime}</div>
                <div >Genre: {info.Genre}</div>
                <div >Rated {info.Rated}</div>
                <div >Released {info.Released}</div>
              </div>
              <div >{info.Plot}</div>
              <div >Cast: {info.Actors}</div>


            </Modal>

          </div>
        </div>
      </div>
    </div>
  )
}


