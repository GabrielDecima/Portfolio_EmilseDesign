import Container from '../container/container';
import styles from './projects.module.css';

const Projects = () => {
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
                    <div className={styles.cardProject}>
                        Proyecto
                    </div>
                    <div className={styles.cardProject}>
                        Foto
                    </div>
                    <div className={styles.cardProject}>
                        Video
                    </div>
                    <div className={styles.cardProject}>
                        Animacion
                    </div>
                    <div className={styles.cardProject}>
                        Invitacion
                    </div>
                    <div className={styles.cardProject}>
                        Carta
                    </div>

                </div>
            </Container>
            </section>
        </>
    );
}

export default Projects;
