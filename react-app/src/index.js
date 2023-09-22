import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const element = React.createElement('h1',{},'Hello, React!!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <h1 className='title'>Hello, React!!</h1>
      <h2>React Study</h2>
    </div>
  );