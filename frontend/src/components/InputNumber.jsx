
export function InputNumber({label, columnSize, formControl, errorMessage }){

    return (
        <div className={columnSize}>
            <label>{label}</label><br/>
            <input type="number" className="form-control" {...formControl} placeholder={label}/>
            <small className="text-danger">{errorMessage}</small>
        </div>
    )

}