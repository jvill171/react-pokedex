import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css"

const Pokedex = ({ dexData, name, totalEXP, isWinner }) => {

    

    return (
        <div className="Pokedex" style={isWinner ? {border: "3px solid goldenrod", boxShadow: "0 0 20px goldenrod"} : {}}>
            <h1 className="dexTitle">{name}</h1>
            <div className="dexCards">
                {dexData.map(pokeData => 
                    <Pokecard key={`Pokecard-${name}-${pokeData.id}`} pokeData={pokeData} />
                    )}
            </div>
            <div className="dexCalc">
                {isWinner && 
                    <h1>THIS HAND WINS!</h1>}
                <p><b>TOTAL EXP:</b> {totalEXP}</p>
            </div>
        </div>
    )
}


export default Pokedex;