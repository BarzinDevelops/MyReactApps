import React from 'react';
// import ReactDOM from "react-dom"; //depricated from version 18
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"


// ReactDOM.render(<App/>, document.getElementById('root')); //depricated from version 18
ReactDOM.createRoot(document.getElementById('root')).render(<App/>); //for concurency purpose so rendering can be interrupted when user makes changes 




