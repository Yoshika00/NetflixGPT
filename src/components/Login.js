import  { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
     //validate the form data
     
     const msg = checkValidData(email.current.value, password.current.value);
     setErrorMessage(msg);

     if(msg) return;

     if(!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
              displayName: name.current.value, 
              photoURL: USER_AVATAR
        })
            .then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(
                   addUser(
                   { 
                     uid: uid, 
                     email: email, 
                     displayName: displayName,
                     photoURL: photoURL
                    }
                 ));
             }) 
           .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + "-" + errorMessage)
         // ..
         });
      }
                     
     else {                
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in logic
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
     }
     
  }

  const toggleSignInForm = () => {
     setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
           src={BG_URL}
           alt='bg-url'
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