import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inboxSliceAsync } from '../../redux/inboxSlice/InboxSliceAsync';
import { DivUserMessage } from './DivUserMessage';

const BoiteMessage = () => {

    const {messages} = useSelector(state => state.inboxSlice)
    const {loginId} = useSelector(state => state.authSlice)
    const dispatch = useDispatch()

    const show = ()=>{
        if(messages.length === 0)
            return "Aucun messages"

        return messages.map(item => <DivUserMessage key={item.profile.idMembre} profil={item.profile} message={item.message} />)
    }


    useEffect(()=>{
        dispatch(inboxSliceAsync.getInboxMessage(loginId))
    }, [])


    return (
        <div>
            <h4 className="pt-3 pb-4"><b>Mes messages</b></h4>
            {show()}
        </div>
    )

}

export default BoiteMessage