// node_modules imports
import React from 'react'; // core react library
import ReactDOM from 'react-dom/client'; // React package for working with the DOM.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// custom imports
import './index.css'; // project-wide css
import App from './App'; // importing App Component
import reportWebVitals from './reportWebVitals';

// finding the div with id root and selecting it for DOM Manipulation
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
