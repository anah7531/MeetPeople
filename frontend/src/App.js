import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccueilMembre from './components/AccueilMembre';
import CreerCompte from "./components/CreerCompte";

export function App(){

  return (
    <div>
        <Router>
          <div className='main'>
           
            <Routes>
                 <Route path='/' element={ <CreerCompte
                                           />}>  
     
               </Route> 
            </Routes>
          </div>
        </Router>
    </div>
  )
}