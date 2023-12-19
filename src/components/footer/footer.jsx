import styles from './footer.module.css';
import IconFacebook from '../../assets/icons/facebook_BLACK.png';
import IconInstagram from '../../assets/icons/instagram_BLACK.png';
import IconWhatsapp from '../../assets/icons/whatsapp_BLACK.png';
const Footer = () => {
    return (
        <>
            <section className={styles.sectionFooter}>
                <div className={styles.containerFooter}>
                    <div className={styles.containerLinks}>
                        <a href="#home">Home</a>
                        <a href="#pricing">Precios</a>
                        <a href="#projects">Muestras</a>
                        <a target='_blank' rel='noreferrer'    
                        href="https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20sus%20servicios,%20me%20puedes%20dar%20mas%20informaci%C3%B3n">Contacto</a>
                        <a href="#about">Sobre mi</a>
                    </div>
                    <div className={styles.containerProjects}>
                        <a href="#">Todos</a>
                        <a href="#">Invitaciones</a>
                        <a href="#">Fotos</a>
                        <a href="#">Banners</a>
                    </div>
                    <div className={styles.containerSocial}>
                        <a href="#"><img src={IconFacebook}alt="" /></a>
                        <a href="#"><img src={IconInstagram}alt="" /></a>
                        <a href="#"><img src={IconWhatsapp}alt="" /></a>
                    </div>    
                   
                </div>
                <div className={styles.containerCopyright}>
                        <p>Copyright @2023 gyda</p>
                </div>

            </section>

        </>
    );
}

export default Footer;
