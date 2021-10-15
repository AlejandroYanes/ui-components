import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';
import RenderIf from 'components/RenderIf';
import { SpinningDots } from 'components/Loaders';
import Search from './Search';
import Option from './Option';
import { Edge, OptionsList, StyledOptionsTray } from './styled';
import getFloatingStyles from './get-floating-styles';
import { SelectOption } from './';

interface Props {
  isOpen: boolean;
  isLoading: boolean;
  value: SelectOption | SelectOption[];
  options: SelectOption[];
  onOptionClick: (event) => void;
  showSearch?: boolean;
  search: string;
  onSearch: (event) => void;
  anchorTo?: MutableRefObject<any>;
}

const OptionsTray: FunctionComponent<Props> = (props) => {
  const {
    isOpen,
    isLoading,
    value,
    options,
    onOptionClick,
    showSearch,
    search,
    onSearch,
    anchorTo,
  } = props;

  const [state, setState] = useState({
    hidden: true,
    height: 10,
    float: 'bottom',
  });
  const trayRef = useRef(undefined);

  const optionElements = useMemo(() => (
    options.map((option) => {
      const isSelected = Array.isArray(value)
        ? value.some((v) => v.value === option.value)
        :option.value === value?.value;

      return (
        <Option
          key={option.value}
          option={option}
          isSelected={isSelected}
          onClick={onOptionClick}
        />
      )
    })
  ), [value, options, onOptionClick]);

  useEffect(() => {
    if (isOpen) {
      const trayFloatingValues = getFloatingStyles({
        showSearch,
        optionsCount: options.length,
        trayRef,
        anchorTo,
      });

      setState({ ...trayFloatingValues, hidden: false });
    } else {
      setState({
        height: 10,
        float: 'bottom',
        hidden: true,
      });
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <StyledOptionsTray
        data-el="select-tray"
        ref={trayRef}
        {...state}
      >
        <RenderIf condition={showSearch} fallback={<Edge />}>
          <Search value={search} onChange={onSearch} />
        </RenderIf>
        <OptionsList>
          {optionElements}
        </OptionsList>
        <Edge>
          <RenderIf condition={isLoading}>
            <SpinningDots size="small" margin="10px 0" />
          </RenderIf>
        </Edge>
      </StyledOptionsTray>
    );
  }

  return null;
};

export default OptionsTray;
