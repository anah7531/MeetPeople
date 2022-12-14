import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/styles.css";
import { AuthLayout } from './layouts/auth/AuthLayout';
import CreerCompte from './pages/CreerCompte/CreerCompte';
import { MainLayout } from './layouts/main/MainLayout';
import AccueilMembre from './pages/AcceuilMembre.jsx/AccueilMembre';
import Matchs from './pages/Matchs';
import Conversation from './pages/Conversation';

export function App(){

  return (
    <Router>
        <Routes>
          
          <Route element={<AuthLayout />}>
            <Route path='/register' element={<CreerCompte />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path='/conversation' element={<Conversation />} />
            <Route path='/matchs' element={<Matchs />} />
            <Route path='/' element={<AccueilMembre />} />
          </Route> 
        </Routes>
    </Router>
  )
}