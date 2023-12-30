import Container from '../container/container';
import CardPrice from '../cards/cardPrice.jsx';
import styles from './prices.module.css';

const Prices = () => {
    return (
        <>
        <section className={styles.sectionPrices} id='pricing'>
            <Container>
            <div className={styles.containerPrices} >

                <div className={styles.containerTable} >
                    <table className={styles.tablee} >
                        <thead >
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
                        <button ><a target='_blank' rel='noreferrer'    
                        href="https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20el%20servicio,%20ESTANDAR%20puedes%20darme%20mas%20informaci%C3%B3n.">consultar</a></button>

                        <button><a target='_blank' rel='noreferrer'    
                        href="https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20el%20servicio,%20MEDIO%20puedes%20darme%20mas%20informaci%C3%B3n.">consultar</a></button>
                        
                        <button><a target='_blank' rel='noreferrer'    
                        href="https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20el%20servicio,%20PREMIUM%20puedes%20darme%20mas%20informaci%C3%B3n.">consultar</a></button>
                    </div>
                </div>
                <div className={styles.containerCard}>
                    <CardPrice nombre = "Estandar" precio = "10.000"/>
                    <CardPrice nombre = "Medio" precio = "20.000"/>
                    <CardPrice nombre = "Premium" precio = "30.000"/>
                </div>
            </div>
            </Container>
        </section>
        </>
    );
}

export default Prices;


