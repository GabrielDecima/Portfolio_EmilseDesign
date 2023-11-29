import Container from '../container/container';
import styles from './about.module.css';
import profile from '../../assets/ProfileAbout.jpeg';
import iconFacebook from '../../assets/icons/facebook.png';
import iconInstagram from '../../assets/icons/instagram.png';
import iconWhatsapp from '../../assets/icons/whatsapp.png';

const About = () => {
    return (
        <>
            <section className={styles.sectionAbout}>
                <Container>
                    <div className={styles.containerAbout}>
                        <div className={styles.containerText}>
                            <img src={profile} alt="" />
                            <p>Hola, mi nombre es <span>Emilse</span>, me encanta el diseño y espero hacer <span>diseños increíbles</span> y también creo tus tarjetas personalizadas </p>
                        </div>
                        <div className={styles.containerIcons}>
                            <a href="" ><img src={iconFacebook} alt="" /></a>
                            <a href="" ><img src={iconInstagram} alt="" /></a>
                            <a href="" ><img src={iconWhatsapp} alt="" /></a>
                            
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}

export default About;

