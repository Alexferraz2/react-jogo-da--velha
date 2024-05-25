import classNames from "classnames";

import styles from "./GameOption.module.css"
import Icons from "../Icons/Icons";


const GameIcon = ( { iconName }) => <Icons iconName={iconName} size="25px"/>

function GameOption({status, onClick, isWinner}) {
    return(
        <div 
        className={
            classNames(styles.gameOption, {
                [styles.winner]: isWinner,
            }

            )
        } 
        onClick={onClick}>
            {
                status === 1 && <GameIcon iconName="circle"/>
            }

{
                status === -1 && <GameIcon iconName="x" />
            }
            
        </div>
    )
}


export default GameOption;