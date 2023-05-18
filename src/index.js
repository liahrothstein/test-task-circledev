import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import store from './store/store';
import { Photos } from './components/photos/photos';
import { Comments } from './components/comments/comments';
import { Todos } from './components/todos/todos';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/todos' element={<Todos />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
