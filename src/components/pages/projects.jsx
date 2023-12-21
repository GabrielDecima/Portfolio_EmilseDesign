import { useState } from 'react';
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

    const Muestras = [
        {
            id: 1,
            img: card1,
            categoria: 'interactivas',
            url: 'https://www.canva.com/design/DAFwCRCF1Qk/SNq_ovdVHp7-56-3hSyZsQ/view?website#2:hay-momentos-inolvidables-que-se-atesoran-en-el-coraz-n-para-siempre-por-esta-raz-n-quiero-que-compartas-conmigo-ste-d-a-tan-especial'
        },
        {
            id: 2,
            img: card2,
            categoria: 'Imagenes',
            url: 'https://www.canva.com/design/DAFwCRCF1Qk/SNq_ovdVHp7-56-3hSyZsQ/view?website#2:hay-momentos-inolvidables-que-se-atesoran-en-el-coraz-n-para-siempre-por-esta-raz-n-quiero-que-compartas-conmigo-ste-d-a-tan-especial'
        },
        {
            id: 3,
            img: card3,
            categoria: 'Videos',
            url: 'ejemplo.com'
        },
        {
            id: 4,
            img: card4,
            categoria: 'interactivas',
            url: 'ejemplo.com'
        },
        {
            id: 5,
            img: card5,
            categoria: 'Imagenes',
            url: 'ejemplo.com'
        },
        {
            id: 6,
            img: card6,
            categoria: 'Imagenes',
            url: 'ejemplo.com'
        }

        
    ]

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

    const filtrarPorCategoria = (categoria) => {
      setCategoriaSeleccionada(categoria);
    };
  
    const tarjetasFiltradas = categoriaSeleccionada === 'todos' ? Muestras : Muestras.filter((item) => item.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase());
    return (

        <>
            <section className={styles.sectionProjects}>
           
            <Container>
                <div className={styles.containerNavigation}>
                    <ul className={styles.navigation}>
                        <li>
                            <a onClick={() => filtrarPorCategoria('todos')} href="#Todos">Todos</a>
                        </li>
                        <li>
                            <a onClick={() => filtrarPorCategoria('interactivas')} href="#invitaciones">Interactivas</a>
                        </li>
                        <li>
                            <a onClick={() => filtrarPorCategoria('Imagenes')} href="#fotos">Imagenes</a>
                        </li>
                        <li>
                            <a onClick={() => filtrarPorCategoria('Videos')} href="#Banners">Videos</a>
                        </li>

                    </ul>
                </div>

                <div className={styles.containerCardsProject}>
                    {tarjetasFiltradas.map((item) => {
                            return (
                                <div key={item.id} className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
                                    <img src={item.img} alt="" />
                                    <div className={styles.overlayText}><a href={item.url} target="_blank" rel="noopener noreferrer">Ver más</a></div>
                                    <p>{item.categoria}</p>
                                </div>
                            )
                        })
                    }
                    <div className={styles.prueba}>
                       
                    </div>
                </div>
            </Container>
            </section>
        </>
    );
}

export default Projects;


        {/* <div className={`${styles.cardProject} ${isMenuOpen ? styles.open : styles.close}`}>
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
                    </div> */}