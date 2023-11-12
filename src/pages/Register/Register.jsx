import React from 'react'
import ButtonPrimary from './../../components/Shared/ButtonPrimary';

const Register = () => {
  return (
    <div className='Container mt-10'>
     
      <h2 className='text-2xl md:text-3xl font-bold px-0 py-2.5'>New Customer Register</h2>
      <form>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
          <div>
            <label className="login-label">First Name</label>
            <input className="login-form" type="text" placeholder="Enter Your First Name" />
          </div>
          <div>
            <label className="login-label">Last Name</label>
            <input className="login-form" type="text" placeholder="Enter Your Last Name" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
          <div>
            <label className="login-label">Your Email</label>
            <input className="login-form" type="email" placeholder="Enter Your Email" />
          </div>
          <div>
            <label className="login-label">Enter Your Password</label>
            <input className="login-form" type="password" placeholder="Enter Your Password" />
          </div>
        </div>
        <ButtonPrimary>
          Register
        </ButtonPrimary>
      </form>
    </div>
  )
}

export default Register