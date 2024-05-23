import styles from "./GameOption.module.css"
import Icons from "../Icons/Icons";


const GameIcon = ( { iconName }) => <Icons iconName={iconName} size="25px"/>

function GameOption({status}) {
    return(
        <div className={styles.gameOption}>
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