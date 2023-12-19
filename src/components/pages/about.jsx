import Container from '../container/container';
import styles from './about.module.css';
import profile from '../../assets/ProfileAbout.jpeg';


const About = () => {
    return (
        <>
            <section className={styles.sectionAbout} id='about' >
                <Container>
                    <div className={styles.containerAbout}>
                        <div className={styles.containerText}>
                            <img src={profile} alt=""  />
                            <p>Hola, mi nombre es <span>Emilse</span>, me encanta el diseño y espero hacer <span>diseños increíbles</span> y también creo tus tarjetas personalizadas </p>
                        </div>
                    
                    </div>
                </Container>
            </section>
        </>
    );
}

export default About;

