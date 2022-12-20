import React from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import swal from "sweetalert";
import { InputText } from "../../components/InputText";
import { InputRadio } from "../../components/InputRadio";
import { InputDate } from "../../components/InputDate";
import { DropDown } from "../../components/DropDown";
import { InputNumber } from "../../components/InputNumber";
import { InputEmail } from "../../components/InputEmail";
import { InputPassword } from "../../components/InputPassword";
import { sexeOptions } from "./sexeOptions";
import { interetOptions } from "./interetOptions";
import { situationFamilialeOptions } from "./situationFamilialeOptions";
import { registerSchema } from "./registerSchema";
import { TextArea } from "../../components/TextArea";
import { Api } from "../../service/Api";
import { Link } from "react-router-dom";


const CreerCompte = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm(
        {resolver: yupResolver(registerSchema)}
    );


    // A changer lorsque le login sera terminer
    const postData = async (data) => {

        //Envoie les données à l'API
        const response = await Api.register(data)

        if(response.status === 200){
            //Reset le formulaire
            reset();

            //Alert de confirmation
            swal({
                title: "Vous êtes enregistré",
                icon: "success",
                button: "Accepter"
            })

        } else {
             //Alert de confirmation
             swal({
                title: "Erreur dans la connection",
                icon: "error",
                button: "Accepter"
            })
        }
    }

    return (
        <main>
            <form className="row g-3" onSubmit={ handleSubmit(postData) }>
                <div className="col-12 text-center">
                    <h5>Créer compte</h5>
                    <p>Vous avez un compte? <Link to="/" className="colorlettre text-decoration-none">Connectez-vous ici</Link></p>
                </div>
                <InputText label="Nom" columnSize="col-6" formControl={register("nom")} errorMessage={errors.nom?.message} />
                <InputText label="Prenom" columnSize="col-6" formControl={register("prenom")} errorMessage={errors.prenom?.message} />
                <InputRadio label="Sexe" columnSize="col-6" options={sexeOptions} formControl={register("sexe")} errorMessage={errors.sexe?.message} />
                <InputDate label="Date de naissance" columnSize="col-6" formControl={register("dateDeNaissance")} errorMessage={errors.dateDeNaissance?.message} />  
                <DropDown label="Intérêt" columnSize="col-6" options={interetOptions} formControl={register("idInteret")} errorMessage={errors.idInteret?.message} />    
                <DropDown label="Situation familiale" columnSize="col-6" options={situationFamilialeOptions} formControl={register("idSituationFamiliale")} errorMessage={errors.idSituationFamiliale?.message} />    
                <InputNumber label="Taille en (cm)" columnSize="col-12" formControl={register("grandeur")} errorMessage={errors.grandeur?.message} />
                <TextArea label="Detail profil" columnSize="col-12" formControl={register("detailProfil")} errorMessage={errors.detailProfil?.message} />
                <InputEmail label="Courriel" columnSize="col-12" formControl={register("courriel")} errorMessage={errors.courriel?.message} />
                <InputPassword label="Mot de passe" columnSize="col-6" formControl={register("motDePasse")} errorMessage={errors.motDePasse?.message} />
                <InputPassword label="Confirmer le mot de passe" columnSize="col-6" formControl={register("motDePasseConfirme")} errorMessage={errors.motDePasseConfirme?.message} />
                <div className="col-12 text-center">
                    <input type="submit" className="btn colorBtn rounded-5 text-white px-5" value={"Créer compte"}/>
                </div>
            </form>
        </main>
    )
}

export default CreerCompte