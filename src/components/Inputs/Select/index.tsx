import {
  FunctionComponent,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { getEventValue } from 'helpers';
import { useHoverState } from 'hooks/UI';
import FlexBox from 'components/FlexBox';
import RenderIf from 'components/RenderIf';
import { InputProps } from '../types';
import InputLabel from '../base/Label';
import InputIcon from '../base/Icon';
import OptionsTray from './OptionsTray';
import RightNode from './RightNode';
import Label from './Label';
import { Content, TrayContainer } from './styled';

export interface SelectOption {
  value: string;
  label: string | ReactNode;
  [x: string]: any;
}

interface Props extends InputProps {
  value: SelectOption | SelectOption[];
  options: SelectOption[];
  multiple?: boolean;
  isLoading?: boolean;
  showSearch?: boolean;
  inline?: boolean;
  anchorTo?: MutableRefObject<any>;
}

const Select: FunctionComponent<Props> = (props) => {
  const {
    label,
    icon,
    options,
    value,
    onChange,
    multiple,
    isLoading,
    showClear,
    showSearch,
    inline,
    anchorTo,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const menuRef = useRef(undefined);
  const isHovered = useHoverState(menuRef);

  const togglePopup = useCallback(() => setIsOpen((old) => !old), []);

  const handleSearch = useCallback(
    (event) => setSearch(getEventValue(event)),
    [],
  );

  const handleOptionClick = useCallback((option) => {
    if (multiple) {
      const isSelected = value.some((v) => v.value === option.value);
      const nextValue = isSelected
        ? value.filter(o => o.value !== option.value)
        : value.concat([option]);

      onChange(nextValue);
    } else {
      setIsOpen(false);
      onChange(option);
    }
  }, [value, multiple, onChange]);

  useEffect(() => {
    if (isOpen) {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  return (
    <FlexBox direction="column" ref={menuRef} {...rest} data-el="select-wrapper">
      <RenderIf condition={!inline}>
        <InputLabel text={label} />
      </RenderIf>
      <Content paddLeft={!!icon} onClick={togglePopup} data-el="select-content">
        <InputIcon icon={icon} />
        <Label label={inline && label} value={value} />
        <RightNode
          isOpen={isOpen}
          isLoading={isLoading}
          isHovered={isHovered}
          showClear={showClear}
          multiple={multiple}
          value={value}
          onChange={onChange}
        />
      </Content>
      <TrayContainer data-el="select-tray-container">
        <OptionsTray
          anchorTo={anchorTo}
          isOpen={isOpen}
          isLoading={isLoading}
          value={value}
          options={options}
          onOptionClick={handleOptionClick}
          showSearch={showSearch}
          search={search}
          onSearch={handleSearch}
        />
      </TrayContainer>
    </FlexBox>
  );
};

export default Select;
