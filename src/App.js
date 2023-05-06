import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import { Home } from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}>
            </Route>
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}>
            </Route>
          </Routes>
        </Router>
      </NoteState>
    </>
  );

}

export default App;
