import Container from '../container/container';
import styles from './projects.module.css';
import card1 from '../../assets/cards/Trinidad.png';
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
                            <a href="#invitaciones">Interactivas</a>
                        </li>
                        <li>
                            <a href="#fotos">Imagenes</a>
                        </li>
                        <li>
                            <a href="#Banners">Videos</a>
                        </li>

                    </ul>
                </div>

                <div className={styles.containerCardsProject}>
                    <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                        <img src={card1} alt="" />
                        <div className={styles.overlayText}><a href="https://www.canva.com/design/DAFwCRCF1Qk/SNq_ovdVHp7-56-3hSyZsQ/view?website#2:hay-momentos-inolvidables-que-se-atesoran-en-el-coraz-n-para-siempre-por-esta-raz-n-quiero-que-compartas-conmigo-ste-d-a-tan-especial" target="_blank" rel="noopener noreferrer">Ver más</a></div>
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
