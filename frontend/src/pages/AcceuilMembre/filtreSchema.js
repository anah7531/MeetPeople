import * as yup from "yup";



export const filtreSchema = yup.object().shape({
    sexe: yup.string().oneOf(["H", "F"], "Choisir sexe"),

    ageMin : yup
    .number()
    .min(18,"Age min de 18")
    .typeError("Entrer age minimum")
    .max(100, "Age max de 100"),

    ageMax: yup
        .number()
        .typeError("Entrer age maximum")
        .min(18,"Age min de 18")
        .max(100, "Age max de 100")
})


