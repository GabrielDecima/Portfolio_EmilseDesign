import styles from './header.module.css';
import Container from '../container/container'; 

const Header = () => {
    return (
        <>
        <section className={styles.sectionHeader} id='projects'>
            <Container>
            {/* <span className={styles.span}>- Mi Portafolio</span> */}
            <div className={styles.titleContainer}>
            <h1 className={styles.title}>Mirá alguno de mis trabajos</h1>
            </div>
            </Container>
        </section>
        </>
    );
}

export default Header;
