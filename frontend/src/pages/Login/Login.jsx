import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { InputEmailLogin } from "../../components/InputEmailLogin";
import { InputPasswordLogin } from "../../components/InputPasswordLogin";
import { loginSchema } from "./loginSchema";
import { Api } from "../../service/Api";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import { authSliceAsync } from '../../redux/authSlice/authSliceAsync';

const Login = () => {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm(
        {resolver: yupResolver(loginSchema)}
    );

    const onLoginError = ()=>{
        swal({
            title: "Erreur de connection",
            icon: "error",
            button: "Accepter"
        })
    }


    const postData = async (data) => {
       dispatch(authSliceAsync.login(data, onLoginError))
    }

    return (
        <main>
            <form className="row g-3" onSubmit={ handleSubmit(postData) }>
                <div className="col-12 text-center"><br/>
                    <h5>Login</h5>
                    <p>Vous n'avez pas de compte? <Link to="/register" className="colorlettre text-decoration-none">Créer votre compte ici</Link></p>
                </div>
                <div className="offset-2 col-8">
                    <InputEmailLogin label="Courriel" columnSize="" formControl={register("courriel")} errorMessage={errors.courriel?.message} />
                    <InputPasswordLogin label="Mot de passe" columnSize="" formControl={register("motDePasse")} errorMessage={errors.motDePasse?.message} />
                </div>
                <div className="col-12 text-center">
                    <input type="submit" className="btn colorBtn rounded-5 text-white px-5" value={"Se connecter"}/>
                </div>
            </form>
        </main>
    )
}

export default Login