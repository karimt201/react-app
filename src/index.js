import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import App from './App'
import Navbar from './Components/navbar'
import Content from './content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div className='Container'>
    <App />
    <Navbar />
    <Content />
</div>);
