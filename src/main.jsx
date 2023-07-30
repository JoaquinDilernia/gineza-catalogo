import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA14073nOkv6Ixw-Z8gk17bzPel1AOpJjE",
  authDomain: "gineza-catalogo.firebaseapp.com",
  projectId: "gineza-catalogo",
  storageBucket: "gineza-catalogo.appspot.com",
  messagingSenderId: "977172895887",
  appId: "1:977172895887:web:a6a8b1c084a99a0a3838fa"
};


const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
