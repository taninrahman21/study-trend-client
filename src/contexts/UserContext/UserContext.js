import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext();

const UserContext = ({children}) => {

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  const user = {name: "Tanin Rahman"};
  const authInfo = {user, signUp};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;