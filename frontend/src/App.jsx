import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/styles.css";
import { AuthLayout } from './layouts/auth/AuthLayout';
import CreerCompte from './pages/CreerCompte/CreerCompte';
import { MainLayout } from './layouts/main/MainLayout';
import Conversation from './pages/conversation/Conversation';
import Matchs from './pages/Matchs/Matchs';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AccueilMembre from './pages/AcceuilMembre/AccueilMembre';
import SignalerProfil from './pages/signalerProfile/SignalerProfil';
import ProfilDetailler from './pages/profilDetailler/ProfilDetailler';
import Login from './pages/Login/Login';
import EvaluerMembre from './pages/EvaluerMembre/EvaluerMembre';
import BoiteMessage from './pages/BoiteMessage/BoiteMessage';

export function App(){

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          
          <Route element={<AuthLayout />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<CreerCompte />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path='/' element={<AccueilMembre />} />
            <Route path='/boitemessage' element={<BoiteMessage />} />
            <Route path='/signaler' element={<SignalerProfil />} />
            <Route path='/message/:id' element={<Conversation />} />
            <Route path='/matchs' element={<Matchs />} />
            <Route path='/matchs' element={<Matchs />} />
            <Route path='/profile/:id' element={<ProfilDetailler />} />
            <Route path='/profile/:id/signaler' element={<SignalerProfil />} />
            <Route path='/profile/:id/evaluer' element={<EvaluerMembre />} />
          </Route> 
        </Routes>
      </Router>
    </Provider>
  )
}
