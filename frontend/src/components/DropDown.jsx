
export function DropDown({label, columnSize, options = [], formControl, errorMessage }){

    const createOptions = ()=>{
        return options.map(item => <option key={item.value} value={item.value} >{item.description}</option>)
    }

    return(
        <div className={columnSize}>
            <label>{label}</label>
            <select {...formControl} className="form-select">
                <option></option>
                {createOptions()}
            </select>
            <small className="text-danger">{errorMessage}</small>
        </div>
    )
}