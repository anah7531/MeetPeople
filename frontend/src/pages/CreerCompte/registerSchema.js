import * as yup from "yup";


export const registerSchema = yup.object().shape({
    nom: yup.string().required("Le nom est obligatoire"),
    prenom: yup.string().required("Le prenom est obligatoire"),
    sexe: yup.string().typeError("Choisir sexe").required(),
    dateDeNaissance: yup.string().required("Choisir date de naissance"),
    idInteret: yup.number().typeError("Choisir un intérêt").required(),
    idSituationFamiliale: yup.number().typeError("Choisir un situation familiale").required(),
    grandeur: yup
        .number()
        .typeError("La taille est obligatoire")
        .required()
        .min(130,"La taille min est 130 cm")
        .max(210, "La taille max est 210 cm"),
    detailProfil : yup.string().required("Détail profil est obligatoire"),
    courriel: yup.string().required("Le courriel est obligatoire").email("Courriel invalide"),
    motDePasse: yup.string().required("Saisir un mot de passe").min(6, "Doit contenir au moins 6 caractères"),
    motDePasseConfirme: yup
        .string()
        .required("Confirmer le mot de passe")
        .oneOf([yup.ref("motDePasse")], "Le mot de passe doit correspondre")
})