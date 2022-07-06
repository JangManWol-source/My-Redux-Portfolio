import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux';
import Drawer from './components/Drawer/Drawer';
import AnimatorRoute from './components/Animation/AnimatorRoute';

function App() {
  const bgColor = useSelector((state) => state.toggle.mode)
  const txtColor = useSelector((state) => state.toggle.textColor)
  const isDrawerOpen = useSelector((state) => state.toggle.drawerIsOpen)

  console.log(isDrawerOpen)
  return (
    <div style={{ backgroundColor: bgColor, color: txtColor }}>
      
        <Router>
          <NavBar />
          {isDrawerOpen && <Drawer />}
          <div className='container flex flex-wrap justify-between items-center mx-auto'>
            <AnimatorRoute />
          </div>
          <Footer />
        </Router>
      </div>
  );
}

export default App;
