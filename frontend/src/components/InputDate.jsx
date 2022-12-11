
export function InputDate({label, columnSize, formControl, errorMessage }){

    return(
        <div className={columnSize}>
            <label>{label}</label><br/>
            <input type="date" className="form-control" {...formControl} />
            <small className="text-danger">{errorMessage}</small>
        </div>
    )
}