import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector( (store) => store.user )
  const showGptSearch = useSelector( (store) => store.gpt.showGptSearch )

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {})
      // Sign-out successful.
      
    .catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(
            addUser(
              { 
                uid: uid, 
                email: email, 
                displayName: displayName,
                photoURL: photoURL
              }
            ));
          navigate("/browse")
        } 
        else {
           dispatch(
            removeUser(),
            navigate("/")
          );
        }
  
      });
      
      // Unsubscribe when component unmounts
      return () => unsubscribe();
     }, [])

  const handleGptSearchClick = () => {
       dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
     dispatch(changeLanguage(e.target.value));
     
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black  z-10 flex justify-between">
      <img 
        className="w-40"
        src={LOGO}
        alt="logo" />

      {user && <div className="flex p-3 gap-2">
                  {showGptSearch && <select 
                        className="p-2 bg-gray-800 text-white" 
                        onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGE.map( lang => <option key={lang.identifier} value={lang.identifier}>{lang.name} </option> )}
                     </select>}

                  <button 
                    onClick={handleGptSearchClick}
                    className="bg-purple-900 text-white font-bold rounded-lg px-4">
                     {showGptSearch ? "Home" : "GPT Search"}
                  </button>
                  <img 
                    className="w-12 h-12 rounded-lg"
                    src={USER_AVATAR}
                    alt="user-icon"
                  />
                  <button onClick={handleSignOut} className="font-bold text-white ">(Sign Out)</button>
               </div>
      }
   </div>
  )
}

export default Header;