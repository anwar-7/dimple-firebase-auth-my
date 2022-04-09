import './App.css';
import app from './firebase.init';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSineIn = () => {
    console.log('worked');
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error('i m error', error);
        setUser({});
      });
  };

  const handleSineOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log('i m error', error);
      });
  };
  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSineOut}>Sine Out</button>
      ) : (
        <button onClick={handleGoogleSineIn}>Google Sine In</button>
      )}

      <h3>Name: {user.displayName}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
