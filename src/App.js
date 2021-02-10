import React, { useState } from 'react'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from './context/UserContext';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Sigin from './pages/Signin';
import Signup from './pages/Signup';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Signin' component={Sigin} />
          <Route exact path='/Signup' component={Signup} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
