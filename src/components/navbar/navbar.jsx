import styles from './navbar.module.css';
import logo from '../../assets/emilse-design-favicon-black.png';
import 'boxicons'



// eslint-disable-next-line react/prop-types
const Navbar = ({isMenuOpen, toggleMenu} ) => {

  return (
    <>
      <section className={styles.sectionNavbar}>
           
        <div className={styles.containerNavbar}>
            <div className={styles.containerLogAndMenu}>
                <a className={styles.logo} href="#"><img src={logo} alt="" /></a>
                
                <div className={styles.btnMenu} onClick={toggleMenu}><box-icon name='menu'></box-icon></div> 
            </div>

          <div className={`${styles.menu} ${isMenuOpen ? styles.open : styles.close}`}>
           
                <button onClick={toggleMenu} className={isMenuOpen ? styles.btnClose :''}>
                <span className={styles.X} />
                <span className={styles.Y}  />
                </button>

            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className={styles.sectionBtns}>
            <button>Contact us</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;