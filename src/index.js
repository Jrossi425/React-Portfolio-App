import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

// // when we import from react, it allows us to use "JSX" syntax
// import React from 'react';
// // ReactDOM renders our whole app onto the page
// import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
// // App is a component that we created
// import App from './App';

// // Entry point
// // The webpack config of react is using src/index.js as the entry point
// // this is telling reactDOM where we want to render our whole app

// const root = ReactDOM.createRoot(document.getElementById('root'));

// // actually render our app
// root.render(<App/>);
