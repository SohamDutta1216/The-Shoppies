import React, { useState } from 'react'
import Nominated from '../Nominated'
import Modal from "react-modal";
import { CgClose } from 'react-icons/cg';
import Banner from '../Banner'


export default function Index({ nominations, setNominations }) {
  const [showModal, setShowModal] = useState(false);
  function triggerModal() {
    setShowModal(prev => !prev)
  }
  const nominatedMovies = Object.keys(nominations)
  const removeNomination = function (movie) {
    delete nominations[movie]
    setNominations({ ...nominations })
  }
  return (
    <div>

      {nominatedMovies.length === 5 ?

        <div>
          <div className='container-fluid movie-app'>

            <div className='row'>
              {nominatedMovies.map((movie, idx) => {
                return (
                  <div>
                    <div key={idx}>
                      <Nominated
                        removeNomination={removeNomination}
                        nominate={nominations[movie]}
                      />
                    </div>
                  </div>
                )
              })}
              <Modal
                isOpen={true}
                onRequestClose={triggerModal}
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
                shouldCloseOnEsc={
                  true}
              >

                <div className='contain'>

                  <p style={{ textAlign: 'center' }}> Your Top 5 Nominations</p>

                  <div className='row'>
                    {nominatedMovies.map((movie, idx) => {
                      return (
                        <div key={idx}>
                          <Banner
                            removeNomination={removeNomination}
                            nominate={nominations[movie]}
                          />
                        </div>
                      )
                    })}

                  </div>

                </div>

              </Modal>
            </div>
          </div>
        </div>
        :
        <div>
          <div className='container-fluid movie-app'>
            <div className='row'>
              {

                nominatedMovies.length > 0 ?
                  nominatedMovies.map((movie, idx) => {
                    return (
                      <div key={idx}>
                        <Nominated
                          removeNomination={removeNomination}
                          nominate={nominations[movie]}
                        />

                      </div>
                    )
                  })
                  :
                  <div style={{ textAlign: 'center', marginTop: '1px', marginBottom: '1px' }}>
                  </div>
              }
            </div>
          </div>
        </div>
      }


    </div>
  )
}


