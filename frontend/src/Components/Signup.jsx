import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div className='w-100 d-flex align-items-center justify-content-center bg-dark' style={{ height: '90vh' }}>
            <div className="box w-25">
                <h1 className='text-center text-light mb-3'>Sign up </h1>
                <label htmlFor="" className='text-light ms-2 mt-3'>Username</label>
                <input type="text" className='form-control mt-2 bg-dark text-white border-light ' />
                <label htmlFor="" className='text-light ms-2 mt-3'>Email</label>
                <input type="email" className='form-control mt-2 bg-dark text-white border-light ' />
                <label htmlFor="password" className='text-light mt-3 ms-2' >password</label>
                <input type="password" className='form-control mt-2  bg-dark text-white border-light' />
                <div className='w-100 d-flex justify-content-center'>
                    <input type="button" className='btn btn-info w-50 mt-5 ' value="create account"/>
                </div> 
                <p className='text-light text-center mt-3'>Have an account? <Link to={'/login'}>Login</Link></p>       
            </div>
        </div>
    </div>
  )
}

export default Signup