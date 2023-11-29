import Container from '../container/container';
import styles from './projects.module.css';
import card1 from '../../assets/cards/card1.png';
import card2 from '../../assets/cards/card2.png';
import card3 from '../../assets/cards/card3.png';
import card4 from '../../assets/cards/card4.png';
import card5 from '../../assets/cards/card5.png';
import card6 from '../../assets/cards/card6.png';




// eslint-disable-next-line react/prop-types
const Projects = ({isMenuOpen}) => {

    return (
        <>
            <section className={styles.sectionProjects}>
           
            <Container>
                <div className={styles.containerNavigation}>
                    <ul className={styles.navigation}>
                        <li>
                            <a href="#todos">Todos</a>
                        </li>
                        <li>
                            <a href="#invitaciones">Invitaciones</a>
                        </li>
                        <li>
                            <a href="#fotos">Fotos</a>
                        </li>
                        <li>
                            <a href="#Banners">Banners</a>
                        </li>

                    </ul>
                </div>

                <div className={styles.containerCardsProject}>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                        <img src={card1} alt="" />
                        <div className={styles.overlayText}>Ver más</div>
                    </div>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                        <img src={card2} alt="" />
                        <div className={styles.overlayText}>Ver más</div>
                    </div>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                        <img src={card3} alt="" />
                        <div className={styles.overlayText}>Ver más</div>
                    </div>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                     <img src={card4} alt="" />
                     <div className={styles.overlayText}>Ver más</div>
                    </div>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                     <img src={card5} alt="" />
                     <div className={styles.overlayText}>Ver más</div>
                    </div>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                        <img src={card6} alt="" />
                        <div className={styles.overlayText}>Ver más</div>
                    </div>

                </div>
            </Container>
            </section>
        </>
    );
}

export default Projects;
