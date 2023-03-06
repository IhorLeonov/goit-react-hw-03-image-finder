import { Overlay, ModalBox } from 'components/modal/Modal.styled';
import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onBackdropClick}>
        <ModalBox>{this.props.children}</ModalBox>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
};
