import * as yup from "yup";


export const loginSchema = yup.object().shape({
    courriel: yup.string().required("Le courriel est obligatoire").email("Courriel invalide"),
    motDePasse: yup.string().required("Saisir votre mot de passe")
})