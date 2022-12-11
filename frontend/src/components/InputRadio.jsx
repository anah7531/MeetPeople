
export function InputRadio({label, columnSize, options = [], formControl, errorMessage}){

    const createOptions = ()=>{
        return options.map(item => (
            <div key={item.value} className="form-check form-check-inline">
                <label className="form-check-label">{item.description}</label>
                <input className="form-check-input" type="radio" value={item.value} {...formControl} /> 
            </div>
        ))
    }
    
    return (
        <div className={columnSize}>
            <div>
                <label>{label}</label>
            </div>
            {createOptions()}
            <div>
                <small className="text-danger">{errorMessage}</small>
            </div>
        </div>
    )
}