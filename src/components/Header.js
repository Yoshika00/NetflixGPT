import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector( (store) => store.user )

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

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img 
        className="w-44"
        src={LOGO}
        alt="logo" />

      {user && <div className="flex p-2 gap-2">
                  <img 
                    className="w-12 h-12"
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