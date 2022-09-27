import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BirthDayApp from './projects/birthdayRemainder/birthdayApp';
import TourApp from './projects/tours/tourApp';
import ReviewApp from './reviews/reviewApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<BirthDayApp />*/}
    {/*<TourApp />*/}
    <ReviewApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
