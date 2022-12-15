import { util } from "../../util/util";

export function SonMessage({message, date}){

    return(
        <div className="boiteChat mb-2">
            <div className={'floatLeft'}>
                <div className='rounded-5 px-3 py-1 chatRecevant'>{message}</div>
            </div>
            <div className={'fontDate floatLeft'}>{util.formatDate(date)}</div>
        </div>
    )

}