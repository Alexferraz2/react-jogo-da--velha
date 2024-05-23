import styles from './Header.module.css'


import Title from "../title/title";
import SubTitle from "../SubTitlte/SubTitle";
import Icons from '../Icons/Icons'

function Header () {
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            
            <SubTitle>Criado por Alexsandro Leandro</SubTitle>
            <div className={styles.iconContent}>
                <Icons iconName="github" link="https://github.com/Alexferraz2"/>
            </div>
        </div>
    )
}

export default Header