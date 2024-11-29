import React from 'react'
import froza1 from '../assets/froza1.jpg'
import bmw from '../assets/bmw.jpg'
import valorant from '../assets/valorant.jpg'
import fifa from '../assets/fifa.png'
import rdr from '../assets/rdr.jpg'
import bgmi from '../assets/bgmi.jpg'
import onlyup from '../assets/onlyup.jpg'
import ct from '../assets/ct.png'
import cod from '../assets/cod.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Home.css'

const Home = () => {
  return (
    <div className='full-body bg-dark'>
      <div id="carouselExampleAutoplaying" className="carousel slide container-fluid rounded-4 mb-1" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={froza1} className="d-block w-100" alt="frozahorizon-image" />
           
          </div>
          <div className="carousel-item">
            <img src={bmw} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={valorant} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="cards">
        <div className="row row mx-auto">
          <div className="col">
            <div className="card" >
              <img src={fifa} className="card-img-top" alt="..." />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={onlyup} className="card-img-top" alt="..." />
              <div className="card-body bg-dark text-light ">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-outline-dark">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={ct} className="card-img-top" alt="..." />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 mx-auto">
          <div className="col">
            <div className="card" >
              <img src={cod} className="card-img-top" alt="..." />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={bgmi} className="card-img-top" alt="..." />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src={rdr} className="card-img-top" alt="..." />
              <div className="card-body bg-dark text-light">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Home