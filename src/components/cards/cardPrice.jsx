import styles from './cardPrice.module.css';

// eslint-disable-next-line react/prop-types
const CardPrice = ({nombre, precio }) => {
    return (
        <>
             {/* <div className={styles.card}>
                <div className={styles.header}>
                    <span className={styles.title}>{nombre}</span>
                    <span className={styles.price}>${precio}</span>
                </div>
                <p className={styles.desc}>Especificaciones:</p>
                <ul className={styles.lists}>
                    <li className={styles.list}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Edición de fotos</span>
                    </li>
                    <li className={styles.list}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Calendario</span>
                    </li>
                    <li className={styles.list}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Confirmación de asistencia</span>
                    </li>
                </ul>
                <button type="button" className={styles.buttonAction}>Solicitar</button>
                </div> */}




                {/* ------------------------ */}
               
                <div className={styles.card}>
                    <h2>{nombre}</h2>
                    <p>${precio}</p>
                    <button type="button" className={styles.buttonAction}>Solicitar</button>
                </div>

        </>
    );
}

export default CardPrice;
