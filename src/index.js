import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import UseStateArray from './components/useState-array'
import UseStateObject from './components/useState-object'
import UseStateBasics from './components/useState-basics'
import ErrorExample from './components/error-example'

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='useStateHookExamples/' element={<App />}>
          <Route path='usestatearray' element={<UseStateArray />} />
          <Route path='usestateobject' element={<UseStateObject />} />
          <Route path='usestatebasics' element={<UseStateBasics />} />
          <Route path='errorexample' element={<ErrorExample />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>, root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
