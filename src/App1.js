import React from 'react';
import './App1.css';
import Form from './Form';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import App from './App';
import Login from './Login';

function App1() {
  return (<div className='App1'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/Dashboard" element={<App />}/>
    </Routes>
    </BrowserRouter>
      
  </div>
);}

export default App1;
