import * as yup from "yup";


export const filtreSchema = yup.object().shape({
    
    sexe: yup.string().typeError("Choisir sexe"),
    
    minimum: yup
        .number()
        .typeError("Entrer age minimum")
        .min(18,"Age min de 18")
        .max(100, "Age max de 100"),
    maximum: yup
        .number()
        .typeError("Entrer age maximum")
        .min(18,"Age min de 18")
        .max(100, "Age max de 100")
})