import styles from './Perfil.module.css'
const Perfil = ({ nameUser }) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nameUser}.png`} alt="This is me" />
            <h1 className={styles.name}>{nameUser}</h1>
        </header>
    )
}

export default Perfil