import styles from './cardPrice.module.css';

// eslint-disable-next-line react/prop-types
const CardPrice = ({nombre, precio, url }) => {
    return (
        <>
                <div className={styles.card}>
                    <h2>{nombre}</h2>
                    <p>${precio}</p>
                    <button type="button" className={styles.buttonAction}>
                    <a target='_blank' rel='noreferrer' href={url}>Solicitar</a></button>
                </div>

        </>
    );
}

export default CardPrice;
