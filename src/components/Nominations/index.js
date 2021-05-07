import React from 'react'
import Nominated from '../Nominated'

const index = ({ nominations, setNominations }) => {
  const nominatedMovies = Object.keys(nominations)
  return (
    <div>
      <div className='container-fluid movie-app'>
        <div className='row'>
          {nominatedMovies.length > 0 ?
            nominatedMovies.map((movie, idx) => {
              return (
                <div key={idx}>
                  <Nominated
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
  )
}

export default index
