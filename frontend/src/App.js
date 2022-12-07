import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccueilMembre from './components/AccueilMembre';

export function App(){

  return (
    <div>
        <Router>
          <div className='main'>
           
            <Routes>
                 <Route path='/' element={ <AccueilMembre
                                           />}>  
     
               </Route> 
            </Routes>
          </div>
        </Router>
    </div>
  )
}