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
                           
                        <button className={styles.btnCallToAction}><a target='_blank' rel='noreferrer'    
                        href="https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20sus%20servicios,%20me%20puedes%20dar%20mas%20informaci%C3%B3n.">Contáctame</a></button>
                    </div>
                </Container>

            </section>
        </>
    );
}

export default CallToAction;
