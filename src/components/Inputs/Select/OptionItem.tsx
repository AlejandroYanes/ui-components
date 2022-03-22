import { FunctionComponent } from 'react';
import RenderIf from 'components/RenderIf';
import { CheckMarkIcon } from 'components/Icons';
import { OptionIcon, StyledOption } from './styled/option';
import { SelectOption } from './index';

interface Props {
  isSelected: boolean;
  option: SelectOption;
  onClick: (event) => void;
}

const OptionItem: FunctionComponent<Props> = (props) => {
  const { isSelected, option, onClick } = props;

  const handleOnClick = () => onClick(option);

  return (
    <StyledOption
      role="button"
      isSelected={isSelected}
      onClick={handleOnClick}
    >
      <RenderIf condition={isSelected}>
        <OptionIcon>
          <CheckMarkIcon id="select-mark" />
        </OptionIcon>
      </RenderIf>
      <span data-el="option-content">{option.label}</span>
    </StyledOption>
  );
};

export default OptionItem;
