import styles from "./Score.module.css"
import Icons from "../Icons/Icons";

function Score({count, countx}) {
    return(
        <>
            
            <h3>Placar: </h3>
            
            <div className={styles.score}>
                <div className={styles.scoreinfo}>
                    <h4>{count}</h4>
                    <Icons iconName="circle"/>
                </div>
                <div className={styles.scoreinfo}>
                <h4>{countx}</h4>    
                    <Icons iconName="x"/>
                </div>
            </div>
        </>
    )
}


export default Score;