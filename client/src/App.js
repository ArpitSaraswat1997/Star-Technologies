
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Project from './components/Project';
import { Route, Routes } from 'react-router-dom';
import Emerald from './components/Emerald';

function App() {
  return (
    <>
     <Header/>
    <Routes>
      <Route  path="/" element={<Homepage/>} />
      <Route  path="/project" element={ <Project/>} />
       <Route  path="/emerald" element={ <Emerald/>} />
    </Routes> 
   
   
   

 

   
    

   <Footer/> 
    </>
  );
}

export default App;
