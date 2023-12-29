import styles from './whatsapp.module.css';


// eslint-disable-next-line react/prop-types
const Whatsapp = ({isMenuOpen}) => {
    return (
        <>
          <button className={`${ isMenuOpen ? styles.open : styles.whatsapp}`}> <a target='_blank' rel='noreferrer'    
                        href="https://api.whatsapp.com/send?phone=543812060696&text=Hola%20Emilse!%20Estoy%20interesado%20en%20tus%20servicios,%20¿Podrías%20darme%20mas%20informaci%C3%B3n?"><box-icon name='whatsapp' type='logo' color='#ffffff' ></box-icon></a></button>  
         
        </>
    );
}

export default Whatsapp;
