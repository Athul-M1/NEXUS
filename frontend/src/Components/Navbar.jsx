import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
            <nav className=" navbar navbar-expand-lg bg-dark">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <Link to={'/'} className="navbar-brand text-light" >NEXUS</Link>
                    <button className="navbar-toggler" type="button" style={{ textDecoration: 'none' }} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link to="/" className="nav-link active text-light" aria-current="page">
                                    Home
                                </Link>

                            </li>
                            {/* <li className="nav-item ms-3 ">
                                <a className="nav-link text-light" href="#">Discover</a>
                            </li> */}
                        </ul>
                        <div className='search-bar d-flex justify-content-center'>
                            <form className="d-flex" role="search">
                                <input className="form-control ms-5 bg-dark text-light border border-light p-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-dark" type="submit">Search</button>
                            </form>
                        </div>
                        <div className='d-flex justify-content-center'>

                            <Link to={'/cart'}>
                                <button className='btn btn-outline-dark rounded-pill'> <i className="fa-solid fa-cart-shopping me-1"></i>Cart <span>3</span></button>
                            </Link>
                            <Link to={'/wishlist'}>
                                <button className='btn btn-outline-dark ms-2 rounded-pill'><i className="fa-solid fa-heart"></i> Wishlist <span>4</span></button>
                            </Link>
                            <Link to={'/login'}>
                                <button className='btn btn-outline-dark ms-2 rounded-pill'>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar



// 