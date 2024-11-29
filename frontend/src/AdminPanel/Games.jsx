import React from 'react'
import Sidebar from './Sidebar'
const Games = () => {
  return (
    <div className="row g-0"> {/* Remove container-fluid and use g-0 to remove gutters */}
      {/* Sidebar column */}
      <div className="col-3"> {/* Reduce width for sidebar */}
        <Sidebar />
      </div>
      
      {/* Main content column */}
      <div className="col-9"> {/* Increase width for content */}
        <h1 className='text-center mb-4 mt-3'>Manage Games</h1>
        <form className='bg-white p-3 mx-3'> {/* Add margin on sides */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="game-name" className="form-label">Game Name</label>
              <input type="text" id="game-name" name="game-name" className='form-control' />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="game-price" className="form-label">Game Price</label>
              <input type="text" id='game-price' className='form-control' />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="game-genre" className="form-label">Genre</label>
              <input type="text" id='game-genre' className='form-control' />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="game-image" className="form-label">Game Image</label>
              <input type="file" id='game-image' className='form-control' />
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary px-4">Add Game</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Games
