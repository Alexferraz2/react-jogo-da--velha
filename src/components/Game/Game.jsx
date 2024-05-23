
import { useState } from "react";
import styles from "./Game.module.css"


import GameOption from "../GameOption/GameOption";



function Game() {
    const [gameSate, setGameState] = useState(Array(9).fill(0))
    console.log(gameSate)
    return(
        <div className={styles.game}>
            {
                gameSate.map((value, pos) => 
                <GameOption 
                    key={`game-option-pos-${pos}`}
                    status={value}
                />)
            }

            
        </div>
    )
}

export default Game;