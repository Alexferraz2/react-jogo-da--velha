
import { useState } from "react";
import styles from "./Game.module.css"


import GameOption from "../GameOption/GameOption";
import Icons from "../Icons/Icons";



function Game() {
    const [gameSate, setGameState] = useState(Array(9).fill(0))

    const [currentPlayer, setCurrentPlayer] = useState(1)
    
    const handleClick = (pos) => {
        if(gameSate[pos] === 0) {
            let newGameState = [...gameSate]
            newGameState[pos] = currentPlayer
            setCurrentPlayer(currentPlayer * -1)
            setGameState(newGameState)
        }
        
    }
    return(
        <div className={styles.gameContent}>
            <div className={styles.game}>
            {
                gameSate.map((value, pos) => 
                <GameOption 
                    key={`game-option-pos-${pos}`}
                    status={value}
                    onClick={() => handleClick(pos)}
                />)
            }

            
            </div>
            <div className={styles.gameInfo}>
                <h4>Próximo a jogar</h4>
                {
                    currentPlayer === 1 && <Icons iconName="circle"/>
                }
                {
                    currentPlayer === -1 && <Icons iconName="x"/>
                }
            </div>
        </div>
        
    )
}

export default Game;