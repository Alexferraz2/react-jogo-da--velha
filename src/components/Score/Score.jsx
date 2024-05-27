import styles from "./Score.module.css"
import Icons from "../Icons/Icons";

function Score() {
    return(
        <>
            <h4 >Placar:</h4>
            <div className={styles.score}>
                <div className={styles.scoreContent}>
                    <Icons iconName="circle"/>
                    <h2>0</h2>
                </div>
                <div className={styles.scoreContent}>
                    <Icons iconName="x"/>
                    <h2>0</h2>
                </div>
            </div>
        </>
    )
}


export default Score;