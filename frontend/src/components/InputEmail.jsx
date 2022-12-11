
export function InputEmail({label, columnSize, formControl, errorMessage }){

    return (
        <div className={columnSize}>
            <label>{label}</label><br/>
            <input type="email" className="form-control" {...formControl} placeholder="courriel@exemple.com"/>
            <small className="text-danger">{errorMessage}</small>
        </div>
    )
}