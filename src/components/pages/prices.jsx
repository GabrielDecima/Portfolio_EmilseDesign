import Container from '../container/container';
import styles from './prices.module.css';

const Prices = () => {
    return (
        <>
        <section className={styles.sectionPrices}>
            <Container>
            <div className={styles.containerPrices}>

                <div className={styles.containerTable}>
                    <table className={styles.tablee}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Estandar</th>
                                <th>Medio</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Edición</td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Calendario</td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Boton confirmación</td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Mapa</td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Pase</td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Redes</td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Video</td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Musica</td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Lista deseos</td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                         

                        </tbody>
                    </table>
                    <div className={styles.containerButtons}>
                        <button ><a href="#"></a>consultar</button>
                        <button><a href="#"></a>consultar</button>
                        <button><a href="#"></a>consultar</button>
                    </div>
                </div>
         
            </div>
            </Container>
        </section>
        </>
    );
}

export default Prices;
