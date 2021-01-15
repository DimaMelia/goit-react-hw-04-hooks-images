import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ src, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('keydown', onEscape);
    };
    // eslint-disable-next-line
  }, []);

  const onEscape = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={onBackdropClick}>
      <div className={s.Modal}>
        <img src={src} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}

// ==========================================================
// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscape);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscape);
//   }

//   onEscape = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className={s.Overlay} onClick={this.onBackdropClick}>
//         <div className={s.Modal}>
//           <img src={this.props.src} alt="" />
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }

export default Modal;
