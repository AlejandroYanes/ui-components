import React, { forwardRef, ReactNode } from 'react';
import Backdrop from 'components/base-components/Backdrop';
import Header from './Header';
import Footer from './Footer';
import { Content, StyledModal } from './styled';

interface Props {
  visible: boolean;
  title?: string | ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  size?: 'auto' | 'small' | 'medium' | 'large' | 'drawer' | 'mobile';
  children?: ReactNode;
}

const Modal = forwardRef<HTMLElement, Props>((props, ref) => {
  const { visible, title, onClose, footer, size, children } = props;

  if (visible) {
    return (
      <Backdrop onClick={onClose}>
        <StyledModal ref={ref} size={size} data-el="modal-container">
          <Header size={size} title={title} onClose={onClose} />
          <Content size={size} data-el="modal-content">
            {children}
          </Content>
          <Footer size={size} footer={footer} />
        </StyledModal>
      </Backdrop>
    );
  }

  return null;
});

Modal.defaultProps = {
  size: 'small',
};

export default Modal;
