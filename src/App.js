import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch])
  

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}
//pk_live_51MbLy5SIlZJtlodPuWyR48BGQR7K3sHsXqFx0zk2NnwumBmAXIkxtn6vLQHRU185COu2PnMREqA4R0qrI8AU9HsP004oZ33EXS
//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

export default App;
