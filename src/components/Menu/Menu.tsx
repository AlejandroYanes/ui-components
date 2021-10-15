import {
  FunctionComponent,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useAppLayout } from 'components/base-components/Configuration';
import RenderIf from 'components/base-components/RenderIf';
import Backdrop from 'components/base-components/Backdrop';
import { MenuWrapper, TriggerContainer, MenuList } from './styled/menu';
import { MenuProvider } from './context';

interface TriggerProps {
  isOpen: boolean;
  toggleMenu: () => void;
  [x: string]: any;
}

interface Props {
  trigger: ReactNode | ((props: TriggerProps) => JSX.Element);
  [x: string]: any;
}

const Menu: FunctionComponent<Props> = (props) => {
  const { trigger, children, ...otherProps } = props;
  const layout = useAppLayout();
  const [isOpen, setIsOpen] = useState(false);
  const menuReference = useRef(undefined);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const triggerElement = useMemo(() => {
    if (typeof trigger === 'function') {
      const MenuTrigger = trigger;

      return (
        <MenuTrigger isOpen={isOpen} toggleMenu={toggleMenu} {...otherProps} />
      );
    }

    return (
      <TriggerContainer onClick={toggleMenu}>
        {trigger}
      </TriggerContainer>
    );
  }, [trigger, toggleMenu]);

  return (
    <MenuWrapper ref={menuReference} data-el="menu-wrapper">
      {triggerElement}
      <RenderIf condition={isOpen}>
        <Backdrop onClick={toggleMenu}>
          <MenuProvider closeMenu={toggleMenu}>
            <MenuList layout={layout} data-el="menu-list">
              {children}
            </MenuList>
          </MenuProvider>
        </Backdrop>
      </RenderIf>
    </MenuWrapper>
  );
};

export default Menu;
