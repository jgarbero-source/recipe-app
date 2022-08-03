// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";

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

const theme = createTheme({
    typography: {
      fontFamily: [
        'Georgia'
    ]},

    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        }}
  });

const root = document.getElementById("root");
render(
<Router>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
</Router>, root);

//reportWebVitals();
