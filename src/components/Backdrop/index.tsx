import React, { FunctionComponent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { scrollThumbWidth } from 'styles/variables';
import { Layout, useAppLayout } from '../Configuration';
import { StyledBackdrop } from './styled';

interface Props {
  onClick: (event) => void;
}

const Backdrop: FunctionComponent<Props> = (props) => {
  const layout = useAppLayout();
  const { onClick, children } = props;
  const backdropRef = useRef(undefined);

  const handleClick = (event) => {
    if (event.target === backdropRef.current) {
      onClick(event);
    }
  };

  useEffect(() => {
    const backdropFlag = document.body.getAttribute('data-backdrop');
    const isPrimaryBackdrop = !backdropFlag;

    if (isPrimaryBackdrop) {
      document.body.setAttribute('data-backdrop', 'on');
      document.body.style.overflowY = 'hidden';

      if (layout === Layout.DESKTOP) {
        document.body.style.padding = `0 ${scrollThumbWidth} 0 0`;
      }

      return () => {
        document.body.removeAttribute('data-backdrop');
        document.body.style.overflowY = 'auto';

        if (layout === Layout.DESKTOP) {
          document.body.style.padding = '0px';
        }
      }
    }
  }, []);

  return ReactDOM.createPortal((
    <StyledBackdrop ref={backdropRef} onClick={handleClick} data-el="backdrop">
      <div data-el="backdrop-container">
        {children}
      </div>
    </StyledBackdrop>
  ), document.body);
};

export default Backdrop;
