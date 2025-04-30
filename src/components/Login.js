import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
     //validate the form data
     
     
     const msg = checkValidData(email?.current?.value, password?.current?.value);
     setErrorMessage(msg);
     
  }

  const toggleSignInForm = () => {
     setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
           src='https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_small.jpg'
           alt=''
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black mx-auto my-32 right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && (
          <input
             type='text'
             placeholder='Full Name'
             className='p-4 my-2 w-full rounded-lg bg-gray-800' 
          />
          )}

          <input 
             ref={email}
             type='text' 
             placeholder='Email' 
             className='p-4 my-2 w-full rounded-lg bg-gray-800' 
          />

          <input 
             ref={password}
             type='password' 
             placeholder='Password' 
             className='p-4 my-2 w-full rounded-lg bg-gray-800' 
          />

          <p className='text-red-700 font-bold text-lg py-2'>{errorMessage}</p>

          <button 
             className='p-4 my-6 bg-red-600 w-full rounded-lg' onClick={handleButtonClick}>
               {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p 
              className='py-2 cursor-pointer' 
              onClick={toggleSignInForm}>
              {isSignInForm ? "New to Netflix ? Sign Up Now." : "Already registered ? Sign In Now."}
          </p>
      </form>
    </div>
  )
}

export default Login;