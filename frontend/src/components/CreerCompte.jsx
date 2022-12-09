import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import logo from "../img/LogoMeetPeople.png"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import swal from "sweetalert";

//Validation des champs avec la librairie @hookform/resolvers/yup
const schema = yup.object({
    nom: yup.string().required("Le nom est obligatoire"),
    prenom: yup.string().required("Le prenom est obligatoire"),
    sexe: yup.string().required(),
    dateDeNaissance: yup.string().required(),
    interet: yup.string().required("Choisir un intérêt"),
    situationFamiliale: yup.string().required("Choisir une situation familiale"),
    grandeur: yup
        .number()
        .typeError("La taille est obligatoire")
        .required()
        .min(130,"La taille min est 130 cm")
        .max(210, "La taille max est 210 cm"),
    courriel: yup.string().required("Le courriel est obligatoire").email("Courriel invalide"),
    motDePasse: yup.string().required("Saisir un mot de passe").min(6, "Doit contenir au moins 6 caractères"),
    motDePasseConfirme: yup
        .string()
        .required("Confirmer le mot de passe")
        .oneOf([yup.ref("motDePasse")], "Le mot de passe doit correspondre")
})

const CreerCompte = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {resolver: yupResolver(schema)}
    );

    const postData = (data) => {

        const membre = {
            courriel: data.courriel,
            nom: data.nom,
            prenom: data.prenom,
            motDePasse: data.motDePasse,
            estActif: 1,
            detailProfil: "Allô, je suis nouveau ici",
            sexe: data.sexe,
            grandeur: data.grandeur,
            dateDeNaissance: data.dateDeNaissance,
            estVerifie: 0,
            idSituationFamiliale: data.situationFamiliale,
            idInteret: data.interet,
            numeroAdminDesactive: null
        }
        
        //Envoie les données à l'API
        fetch("http://localhost:8080/auth/register", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(membre)
        })

        //Reset le formulaire
        reset();

        //Alert de confirmation
        swal({
            title: "Vous êtes enregistré",
            icon: "success",
            button: "Accepter"
        })
    }

    return (
        <div>
            <div className="container color1 text-center p-2 rounded-5">
                <img src={logo} width="30px" alt="" />
                <span className="ms-2"><b>MeetPeople</b></span>
            </div>
            
            <br/>

            <div className="text-center">
                <h5>Créer compte</h5>
                <p>Vous avez un compte? <a href="#" className="colorlettre text-decoration-none">Connectez-vous ici</a></p>
            </div>

            <div className="container">
                <form onSubmit={ handleSubmit(postData) }>
                    <div className="row">
                        <div className="col">
                            <label>Nom</label><br/>
                            <input type="text" className="form-control" {...register('nom')} placeholder="Nom"/>
                            <small className="text-danger">{errors.nom?.message}</small>
                        </div>
                        <div className="col">
                            <label>Prenom</label><br/>
                            <input type="text" className="form-control" {...register('prenom')} placeholder="Prenom"/>
                            <small className="text-danger">{errors.prenom?.message}</small><br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Sexe</label><br/>
                            <input type="radio" value="H" {...register('sexe')} /> Homme
                            <input type="radio" className="ms-3" value="F" {...register('sexe')} /> Femme<br/>
                            {errors.sexe && <small className="text-danger">Choisir le sexe</small>}
                        </div>
                        <div className="col">
                            <label>Date de naissance</label><br/>
                            <input type="date" className="form-control" {...register('dateDeNaissance')} />
                            {errors.dateDeNaissance && <small className="text-danger">La date de naissance est obligatoire</small>}<br/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label>Intérêt</label>
                            <select {...register('interet')} className="form-control">
                                <option selected={true} disabled={"disabled"} value="">Choisir un intérêt</option>
                                <option value="1">Relation serieuse</option>
                                <option value="2">Amitié</option>
                                <option value="3">Relation non serieuse</option>
                                <option value="4">Marriage</option>
                            </select>
                            <small className="text-danger">{errors.interet?.message}</small>
                            {/* {errors.interet && <small className="text-danger">Choisir un intérêt</small>} */}
                        </div>
                        <div className="col">
                            <label>Situation Familiale</label>
                            <select {...register('situationFamiliale')} className="form-control">
                                <option selected={true} disabled={"disabled"} value={""} >Choisir une situation familiale</option>
                                <option value="1">A des enfants</option>
                                <option value="2">N'a pas d'enfants</option>
                            </select>
                            <small className="text-danger">{errors.situationFamiliale?.message}</small>
                            {/* {errors.situationFamiliale && <small className="text-danger">Choisir une situation familiale</small>} */}<br/>
                        </div>
                    </div>
                    <label>Taille (en cm)</label>
                    <input type="number" className="form-control" {...register('grandeur')} placeholder="000"/>
                    <small className="text-danger">{errors.grandeur?.message}</small>
                    <br/>
                    <label>Courriel</label>
                    <input type="email" className="form-control" {...register('courriel')} placeholder="courriel@exemple.com"/>
                    <small className="text-danger">{errors.courriel?.message}</small>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label>Mot de passe</label>
                            <input type="password" className="form-control" {...register('motDePasse', { required:true})}/>
                            <small className="text-danger">{errors.motDePasse?.message}</small>
                        </div>
                        <div className="col">
                            <label>Confirmer le mot de passe</label>
                            <input type="password" className="form-control" {...register('motDePasseConfirme')}/>
                            <small className="text-danger">{errors.motDePasseConfirme?.message}</small><br/>
                        </div>
                    </div>
                <div className="text-center mt-2">
                <input type="submit" className="btn colorBtn rounded-5 text-white" value={"Créer compte"}/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default CreerCompte