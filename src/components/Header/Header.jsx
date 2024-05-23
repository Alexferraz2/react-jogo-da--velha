import styles from './Header.module.css'


import Title from "../title/title";
import SubTitle from "../SubTitlte/SubTitle";

function Header () {
    return(
        <div className={styles.header}>
            <Title>Jogo da Velha</Title>
            
            <SubTitle>Criado por Alexsandro Leandro</SubTitle>
        </div>
    )
}

export default Header