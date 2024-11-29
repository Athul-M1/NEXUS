import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
    return (
        <div className='w-100 d-flex align-items-center justify-content-center bg-dark' style={{ height: '90vh' }}>
            <div className="box w-25">
                    
                    <h1 className='text-center text-light mb-3'>Welcome Back</h1>
                    <label htmlFor="" className='text-light ms-2'>Email</label>
                    <input type="email" className='form-control mt-2 bg-dark text-white border-light ' />
                    <label htmlFor="password" className='text-light mt-3 ms-2' >password</label>
                    <input type="password" className='form-control mt-2  bg-dark text-white border-light' />
                    <div className='w-100 d-flex justify-content-center'>
                        <input type="button" className='btn btn-info w-50 mt-5 ' value="Login" />
                    </div>
                    <p className='text-light text-center mt-3'>New user? <Link to={'/signup'}>sign up</Link></p>
                   <div className='d-flex justify-content-center mt-3'>
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const decoded = jwtDecode(credentialResponse.credential);
                                console.log(decoded)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                        />;
                   </div>
    
                 </div>
        </div>
    )
}

export default Login