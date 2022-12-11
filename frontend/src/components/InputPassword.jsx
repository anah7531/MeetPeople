
export function InputPassword({label, columnSize, formControl, errorMessage }){

    return (
        <div className={columnSize}>
            <label>{label}</label><br/>
            <input type="password" className="form-control" {...formControl} />
            <small className="text-danger">{errorMessage}</small>
        </div>
    )
}