import Container from '../container/container';
import CardPrice from '../cards/cardPrice.jsx';
import styles from './prices.module.css';
import Modal from './modal.jsx';

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
                               <td>Edición<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas  refiera a modificar bla bla ablalsadslasndmlknmdwasdas refiera a modificar bla bla ablalsadslasndmlknmdwasdas refiera a modificar bla bla ablalsadslasndmlknmdwasdas refiera a modificar bla bla ablalsadslasndmlknmdwasdas refiera a modificar bla bla ablalsadslasndmlknmdwasdas refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Edición"}  /></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                            <td>Calendario<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Calendario"}  /></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                            <td>Boton confirmación<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Boton confirmación"}  /></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                                <td>Mapa<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Mapa"}/></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                           <td>Pase<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Pase"}/></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                           <td>Redes<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Redes"}/></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                           <td>Video<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Video"}/></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                           <td>Musica<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Musica"}/></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                            <tr>
                            <td>Lista deseos<Modal text={"La edicion se refiera a modificar bla bla ablalsadslasndmlknmdwasdas"} title={"Lista deseos"}/></td>
                                <td><box-icon name='x' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                                <td><box-icon name='check' color='#1d7fff' ></box-icon></td>
                            </tr>
                         

                        </tbody>
                    </table>
                </div>
                <div className={styles.containerCard}>
                    <CardPrice nombre = "Estandar" precio = "10.000" url = "https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20el%20servicio,%20ESTANDAR%20puedes%20darme%20mas%20informaci%C3%B3n."/>
                    <CardPrice nombre = "Medio" precio = "20.000" url = "https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20el%20servicio,%20MEDIO%20puedes%20darme%20mas%20informaci%C3%B3n."/>
                    <CardPrice nombre = "Premium" precio = "30.000" url = "https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20el%20servicio,%20PREMIUM%20puedes%20darme%20mas%20informaci%C3%B3n."/>
                </div>
            </div>
            </Container>
        </section>
        </>
    );
}

export default Prices;


