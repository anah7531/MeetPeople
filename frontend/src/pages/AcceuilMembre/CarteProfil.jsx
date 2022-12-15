import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { acceuilSlice, acceuilSliceAction } from '../../redux/acceuilSlice/acceuilSlice';
import { Api } from '../../service/Api';
import { util } from '../../util/util';

function CarteProfil({profile}) {

    const dispatch = useDispatch()

    const next = ()=>{
        dispatch(acceuilSliceAction.nextProfile())
    }

    return (
    <div className='col-6 card pb-5 px-0 rounded-top'>     
        <div className='upper-container text-center pt-2 rounded-top '>
                <img src={profile.photoProfil} className="avatar img" alt="photo profil" />
        </div>
        <div className='lower-container text-center'>
            <div className='fs-3'><b>{profile.prenom}   {profile.nom} </b></div>
            <div className='fs-5'>{util.getSexeValue(profile.sexe)}</div>
            <div className='fs-5'>{util.formatToAge(profile.dateDeNaissance)} ans</div>
            <div className='mt-3'>                           
                <button className='btn rounded-5 px-4 color-next text-white' onClick={next}>Next</button>
            </div>
            <div className='mt-3'>

            <button className='btn btn-danger rounded-5 px-4 me-2'  variant="danger">J'aime pas</button>
            <button className='btn color-like text-white rounded-5 px-4 ms-2' >J'aime</button> 
            </div>
        </div>
    </div> 
    )
 }


export default CarteProfil;