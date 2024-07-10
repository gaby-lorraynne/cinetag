import styles from './PagNaoEncontrada.module.css';

const PagNaoEncontrada = () => {
    return(
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Página não encontrada</p>
        </section>
    )
}

export default PagNaoEncontrada;