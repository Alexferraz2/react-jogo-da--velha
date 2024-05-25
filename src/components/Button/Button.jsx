import styles from "./Button.module.css"

function Button({children, onClick, disabled}) {
    return(
        <button 
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
        >
            {children}
        </button>
    )
}

export default Button;