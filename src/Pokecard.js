import React from "react";
import "./Pokecard.css"

const Pokecard = ({pokeData}) => {
    return (
        <div className="Pokecard">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeData.id}.png`}/>
            <ul>
                <li><b>Name:</b> {pokeData.name}</li>
                <li><b>Type:</b> {pokeData.type}</li>
                <li><b>Base EXP:</b> {pokeData.base_experience}</li>
            </ul>
        </div>
    )
}


export default Pokecard;