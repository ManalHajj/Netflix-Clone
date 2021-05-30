import React, { useEffect } from 'react';
import './App.css';

import HomeScreen from "./Screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen"
import { auth } from './firebase';
import { useDispatch, useSelector } from "react-redux"; 
import{login,logout,selectUser} from "./features/counter/userSlice"
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  //permet d'acceder aux states
  const user = useSelector(selectUser);
  // returns a refrence to the dispatch function in redux store that we use to dispatch an action
  const dispatch = useDispatch();


  //listens to the user's logged in state
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth )=>{
      if(userAuth){
     //logged in
      dispatch( login ({  // push the user into the reduct store
        uid: userAuth.uid,
        email: userAuth.email,
      })
      );
    }
    else{
      //logged out
       dispatch(logout()); //sets user back to null
    }

  
  });
  return unsubscribe;
}, [dispatch]);
  return (
    <div className="app">
     
       <Router>
         {!user ?(

         
     <LoginScreen/>
         ) : (

         
        <Switch>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

         <Route path='/profile'>
          <ProfileScreen/>
         </Route>
         
          <Route exact path="/">
        
          <HomeScreen/>
          </Route>
        </Switch>
         )}
    </Router>
    </div>
  );
}

export default App;
