import styles from './GameInfo.module.css'
import Icons from '../Icons/Icons'
import Button from "../Button/Button"


function GameInfo( {currentPlayer, winner, onReset, isDraw}) {
    const shoudEnabledButton = () => {
        if(winner !== 0 ) return true     
        if(isDraw) return true
        
        
            
        }

    return(
        <div className={styles.gameInfo}>
            {
                !isDraw && winner === 0 && 
                <>
                    <h4>Próximo a jogar</h4>
                    {
                        currentPlayer === 1 && <Icons iconName="circle"/>
                    }
                    {
                        currentPlayer === -1 && <Icons iconName="x"/>
                    }
                </>
                
            }

            {
                winner !==0 &&
                <>
                    <h4>Fim de jogo!</h4>
                    <h4>O campeão é!</h4>
                    {
                        winner === 1 && <Icons iconName="circle"/>
                    }
                    {
                        winner === -1 && <Icons iconName="x"/>
                    }
                
                </>
            }

            {
                isDraw && 
                <>
                
                    <h4>Fim do jogo!</h4>
                    <h4>Jogo empatado!!!</h4>
                    <Icons iconName={'draw'}/>
                </>
            }

            <Button
                onClick={onReset}
                disabled={!shoudEnabledButton()}
            >
                Reiniciar
            </Button>
                
            </div>
    )
}

export default GameInfo;