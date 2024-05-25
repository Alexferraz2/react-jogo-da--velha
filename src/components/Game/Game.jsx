
import { useState, useEffect } from "react";
import styles from "./Game.module.css"


import GameOption from "../GameOption/GameOption";
import GameInfo from "../GameInfo/GameInfo"


const winnerTable = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function Game() {
    const [gameSate, setGameState] = useState(Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(1)
    const [winner, setWinner] = useState(0)
    
    const handleClick = (pos) => {
        if(gameSate[pos] === 0 && winner === 0) {
            let newGameState = [...gameSate]
            newGameState[pos] = currentPlayer            
            setGameState(newGameState)
        }
        
    }

    const verifyGame = () => {
        winnerTable.forEach((line) => {
            const values = line.map((pos) => gameSate[pos])
            const sum = values.reduce((acc, value) => acc + value)
            if(sum === 3 || sum === -3){
             setWinner(sum / 3)
            } 
        })
    }


    const handReset = () =>{
        setGameState(Array(9).fill(0))
        setWinner(0)
        setCurrentPlayer(currentPlayer * -1) 
        
    }

    useEffect(() => {
        setCurrentPlayer(currentPlayer * -1)
        verifyGame()
    }, [gameSate])

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
            <GameInfo
                currentPlayer={currentPlayer}
                winner={winner}
                onReset={handReset}
            />
        </div>
        
    )
}

export default Game;