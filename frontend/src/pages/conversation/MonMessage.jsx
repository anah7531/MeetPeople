import { util } from "../../util/util";

export function MonMessage({message, date}){

    return (
        <div className="d-flex flex-column align-items-end mb-2">
            <div className="boiteChat text-end ">
                <div className='rounded-5 px-3 py-1 mb-1 chatExpediteur'>{message}</div>
                <div className="fontDate">{util.formatDate(date)}</div>
            </div>
        </div>
    )
}