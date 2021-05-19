/* eslint-disable indent */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase, FieldValue}}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
// client side renderer app: react (cra)
  // -> database which is Firebase
  // -> react-loading-skeleton
  // tailwind

// folder structure
  // src
    // -> components,
    // -> constants,
    // -> context,
    // -> helpers,
    // -> hooks,
    // -> pages,
    // -> lib (firebase is going to live in here),
    // -> services(firebase function in here)
    // -> styles (talwind`s folder (app/tailwind))
