import styles from './Banner.module.css';

const Banner = ({imagem}) => {
    return(
        <div className={styles.capa} style={{backgroundImage: `url('imagens/${imagem}.png')`}}/>
    )
}

export default Banner;