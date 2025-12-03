import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup';
import AddNote from "./AddNote";
import Home from "./Home";
import ViewAll from './ViewAll';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<Home />} />
         <Route path="/addnote" element={<AddNote />} />
          <Route path="/viewall" element={<ViewAll />} />
        
        
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
