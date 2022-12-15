import React, { useState } from 'react'

const SignalerProfil = () => {

  const [plainte, setPlainte] = useState(
    {
      idPlainte: 1,
      contenu: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id purus at massa elementum volutpat. Mauris rhoncus finibus volutpat. Donec eget nulla pellentesque, condimentum felis quis, pulvinar enim. Nam imperdiet nibh sit amet felis imperdiet ultrices. Phasellus et tincidunt nisi. Pellentesque enim quam, pulvinar et turpis id, cursus ullamcorper purus. Phasellus eu aliquam tortor. Vivamus bibendum gravida turpis, eu luctus massa luctus a. Donec quis nisl tempus, dictum magna vitae, condimentum tellus. Nunc rhoncus ligula vitae ornare blandit.",
      date: "14-12-2022",
      numeroEmploye: 1,
      idMembrePlaignant: 24,
      idMembreConcerner: 18
    }
  )

  return (
    <div className="container w-75">
      <h3 className="text-center mt-5 mb-5">Êtes-vous sûr de vouloir signaler ce membre?</h3>
      <h4 className=""><em>Signalement :</em></h4>

      <div className="mt-4 border rounded p-3">{plainte.contenu}</div>
      
      <div className="text-center mt-5">
        <button className="btn btn-dark me-5">Oui</button>
        <button className="btn btn-dark"><em>Annuler le signalement</em></button>
      </div>
      <br/>
      <button className="btn colorBtn rounded-5 text-white mt-5">Retourner à l'accueil</button>
    </div>
  )
}

export default SignalerProfil