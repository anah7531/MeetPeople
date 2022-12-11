
export function InputText({label, columnSize, formControl, errorMessage }){

    return (
        <div className={columnSize}>
            <label>{label}</label><br/>
            <input type="text" className="form-control" {...formControl} placeholder={label}/>
            <small className="text-danger">{errorMessage}</small>
        </div>
    )
}