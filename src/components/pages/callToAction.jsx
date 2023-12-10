import Container from '../container/container';
import styles from './callToAction.module.css';

const CallToAction = () => {
    return (
        <>
            <section className={styles.sectionCallToAction}>
                <Container>
                    <div className={styles.containerCallToAction}>
                                <div className={styles.containerText}>
                                <span>¿Tienes una idea?</span>
                                <h2>Realiza tu consulta sin compromiso<br></br>¡Despeja tus dudas!</h2>
                                </div>
                           
                        <button className={styles.btnCallToAction}>Contáctame</button>
                    </div>
                </Container>

            </section>
        </>
    );
}

export default CallToAction;
