import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccueilMembre from './components/AccueilMembre';
import CreerCompte from "./components/CreerCompte";
import Header from './components/Header';

export function App(){

  return (
    <div>
        <Header/>
        <Router>
          <div className='main'>
           
            <Routes>
                 <Route path='/' element={ <CreerCompte
                                           />}>  
     
               </Route> 
               <Route path='/accueil' element={ <AccueilMembre
                                           />}>  
     
               </Route> 
            </Routes>
          </div>
        </Router>
    </div>
  )
}