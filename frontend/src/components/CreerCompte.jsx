import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import logo from "../img/LogoMeetPeople.png"
import { useState } from "react";
import Service from "../service/Service";

const CreerCompte = () => {

    const [courriel, setCourriel] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [sexe, setSexe] = useState('');
    const [grandeur, setGrandeur] = useState('');
    const [dateDeNaissance, setDateDeNaissance] = useState('');
    const [idSituationFamiliale, setIdSituationFamiliale] = useState('');
    const [idInteret, setIdInteret] = useState('');

  

    return (
        <div>
      <div className="container color1 text-center p-2 rounded-5">
        <img src={logo} width="30px" alt="" />
        <span className="ms-2"><b>MeetPeople</b></span>
      </div>
      
      <br/><br/>

      <div className="text-center">
        <h5>Créer compte</h5>
        <p>Vous avez un compte? <a href="#" className="colorlettre text-decoration-none">Connectez-vous ici</a></p>
      </div>

      <div className="container">
        <form action="">
          <label>Nom</label><br/>
          <input type="text" className="form-control" placeholder="Nom" />
          <label className="mt-2">Prenom</label><br/>
          <input type="text" className="form-control" placeholder="Prenom" />
          <div className="row mt-2">
            <div className="col">
              <label className="mt-1 mb-1">Sexe</label><br/>
              <input type="radio" name="sexe"/> Homme
              <input type="radio" className="ms-3"name="sexe"/> Femme
            </div>
            <div className="col">
              <label htmlFor="">Date de naissance</label><br/>
              <input type="date" className="form-control"/>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label htmlFor="">Intérêt</label>
              <select className="form-control" name="interet" id="">
                <option value="1">Relation serieuse</option>
                <option value="2">Amitié</option>
                <option value="3">Relation non serieuse</option>
                <option value="4">Marriage</option>
              </select>
            </div>
            <div className="col">
              <label>Situation Familiale</label>
                <select className="form-control" name="interet">
                  <option value="1">A des enfants</option>
                  <option value="2">N'a pas d'enfants</option>
                </select>
            </div>
          </div>
          <label className="mt-2">Taille (En cm)</label><br/>
          <input type="number" className="form-control" placeholder="000"/>
          <label className="mt-2">Courriel</label><br/>
          <input type="email" className="form-control" placeholder="courriel@exemple.com"/>
          <div className="row mt-2">
            <div className="col">
              <label>Mot de passe</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col">
              <label>Confirmer le mot de passe</label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <div className="text-center mt-4">
          <input type="submit" className="btn colorBtn rounded-5 text-white" value="Créer compte"/>
          </div>
        </form>
      </div>
    </div>
    )
}

export default CreerCompte