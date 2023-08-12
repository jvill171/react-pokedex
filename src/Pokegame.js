import React from "react";
import Pokedex from "./Pokedex";
import { shuffleSplit } from "./helpers";


const Pokegame = ({pokeList}) => {
    const players = shuffleSplit(pokeList);

    const calcEXP = (player) =>{
        let total = 0;
        for(let idx=0; idx < player.length; idx++){
            total += player[idx].base_experience
        }
        return total
    }

    const checkIsWinner = (myself) =>{
        const p1_EXP = calcEXP(players[0])
        const p2_EXP = calcEXP(players[1])

        const winner = p1_EXP > p2_EXP ? players[0] : players[1];
        
        return myself === winner
    }

    return (
        <>
            {players.map(
                (player, idx) => 
                    <Pokedex
                        key={`Pokedex-${idx}`}
                        dexData={player}
                        name={`Trainer ${ idx + 1 }`}
                        isWinner={checkIsWinner(player)}
                        totalEXP={calcEXP(player)}
                    />
                )}
        </>
    )
}

export default Pokegame;