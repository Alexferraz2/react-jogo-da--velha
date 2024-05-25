import styles from './GameInfo.module.css'
import Icons from '../Icons/Icons'
import Button from "../Button/Button"


function GameInfo( {currentPlayer, winner, onReset}) {
    const shoudEnabledButton = () => {
        if(winner !== 0 ) return true     
        
            
        }

    return(
        <div className={styles.gameInfo}>
            {
                winner === 0 && 
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