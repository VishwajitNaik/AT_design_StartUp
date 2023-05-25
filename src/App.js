import './App.css';
import Header from './components/Head/Header';
import Home from './components/Hero/Home'
import {Routes, Route, Nevigate} from 'react-router-dom'
import PortFolioItems from './components/Portfolio/PortFolioItems/PortfolioItems'
import Careers from './components/Careers/Careers';
import MechService from './components/MechServices/MechService';
import Signagecareers from './components/SignegeServices/Signagecareers.js';
import ViewClient from './components/ViewClient';


function App() {
  return (
<>
  <Header />
  <Routes>
    <Route path='/' element=<Home /> />
    <Route path='/portfolio' element = <PortFolioItems /> />
    <Route path='/careers' element=<Careers /> />
    <Route path='/mechservices' element=<MechService /> />
    <Route path='/Signagecareers' element=<Signagecareers /> /> 
    <Route path='/viewClients' element= <ViewClient /> /> 
  </Routes>
    
  </>
    );
}

export default App;
