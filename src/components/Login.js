import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  return (
    <div className='relative h-screen'>

      <Header/>

      <div className='absolute inset-0'>
        <img className='w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg' alt='back-img' />
      </div>

      <div className='absolute inset-0 flex justify-center items-center'>
        <div className='bg-black bg-opacity-80 p-16 text-white'>
          <form className='rounded-lg '>
            <h1 className='text-xl font-bold p-0 my-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <div className='flex flex-col'>
              {
                !isSignInForm && ( 
                  <input 
                  type='text' 
                  className='py-2 px-6 mx-0 my-4 bg-[rgb(18,17,16)] border border-red-400 rounded-sm' 
                  placeholder='Full Name' /> 
                )
              }
              <input className='py-2 px-6 mx-0 my-4 bg-[rgb(18,17,16)] border border-red-400 rounded-sm' type='text' placeholder='Email' />
              <input className='py-2 px-6 mx-0 my-4 bg-[rgb(18,17,16)] border border-red-400 rounded-sm' type='password' placeholder='Password' />
              <button className='p-2 mx-0 my-4 rounded-lg bg-red-700' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
              <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>{isSignInForm ? "New to Netflix? Sign Up now." : "Already registered? Sign In Now.."}</p>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login