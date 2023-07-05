import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { legacy_createStore } from 'redux';
// import rootReducer from './reducers';
import { Provider } from 'react-redux'; // gives app access to everything
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Counter';
import About from './pages/Form';
import Contact from './pages/Gallery';
import Server from './pages/Server';
import ServerFilter from './pages/Filter';

import { store } from './redux/store'
//  import { Server } from './components/Server';

const root = ReactDOM.createRoot(document.getElementById('root'));

// STORE -> holds all the state
// let store = legacy_createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// ROUTER -> page navigation
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'server',
        element: <Server />,
      },
      {
        path: 'filter',
        element: <ServerFilter />,
      },
    ],
  },

]);

root.render(
  <Provider store={store}> 
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// Display it to the console
store.subscribe(() => console.log(store.getState()));







// ACTION -> 
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // REDUCER -> based on the action, modifies the store
// // we can have multiple reducers depending on what we want to do
// const counter = (state = 0, action) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

// Dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
