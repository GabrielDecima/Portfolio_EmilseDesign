import styles from './modal.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// eslint-disable-next-line react/prop-types
const Modal = ({text, title}) => {
    return (
        <Popup
        trigger={<button className={styles.info}><box-icon name='error-circle' ></box-icon></button>}
        modal
        nested
      >
        {close => (
          <div className={styles.modal}>
            <button className={styles.btnclose} onClick={close}>
            <box-icon name='x-circle' type='solid' color='#ff0000' ></box-icon>
            </button>
            <div className={styles.header}> {title} </div>
            <div className={styles.content}>
              {' '}
              {text}
            </div>
        
          </div>
        )}
      </Popup>
    );
}

export default Modal;
