import styles from './navbar.module.css';
import logo from '../../assets/png/LogoNormal.png';
import 'boxicons'



// eslint-disable-next-line react/prop-types
const Navbar = ({isMenuOpen, toggleMenu} ) => {

  return (
    <>
      <section className={styles.sectionNavbar}>
           
        <div className={styles.containerNavbar}>
        

            <div className={styles.containerLogAndMenu}>
            
                <div className={styles.btnMenu} onClick={toggleMenu}><box-icon name='menu'></box-icon></div> 
                <a className={styles.logo} href="#"><img src={logo} alt="" /></a>
            </div>

          <div className={`${styles.menu} ${isMenuOpen ? styles.open : styles.close}`}>
           
                <button onClick={toggleMenu} className={isMenuOpen ? styles.btnClose :''}>
                <span className={styles.X} />
                <span className={styles.Y}  />
                </button>

            <ul>
              <li>
                <span><box-icon name='home'></box-icon></span>
                <a href="#home" onClick={isMenuOpen? toggleMenu :''}>Home</a>
              </li>
              <li>
               <span><box-icon name='layout'></box-icon></span>
               <a href="#projects" onClick={isMenuOpen? toggleMenu :''}>Muestras</a>
              </li>
              <li>
              <span><box-icon name='user-pin'></box-icon></span>
              <a href="#about" onClick={isMenuOpen? toggleMenu :''}>Sobre mi</a>
              </li>
              <li>
               <span><box-icon name='customize' ></box-icon></span>
               <a href="#pricing" onClick={isMenuOpen? toggleMenu :''}>Paquetes</a>
              </li>
            </ul>
          </div>
        
        </div>
      </section>
    </>
  );
}

export default Navbar;