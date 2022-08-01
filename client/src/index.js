// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// //window.React1 = require('react');
// root.render(
//   <React.StrictMode>
//     <Router >
//       <App />
//     </Router>
//   </React.StrictMode>
// );

import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(
<Router><App /></Router>, root);

//reportWebVitals();
