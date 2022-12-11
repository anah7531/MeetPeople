
export function TextArea({label, columnSize, formControl, errorMessage }){

    return(
        <div className={columnSize}>
            <label>{label}</label><br/>
            <textarea className="form-control" {...formControl} placeholder={label}/>
            <small className="text-danger">{errorMessage}</small>
        </div>
    )
}