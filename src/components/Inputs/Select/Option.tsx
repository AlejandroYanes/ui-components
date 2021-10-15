import { FunctionComponent } from 'react';
import SvgIcon from 'components/base-components/SvgIcon';
import RenderIf from 'components/base-components/RenderIf';
import { OptionIcon, StyledOption } from './styled';
import { SelectOption } from './index';

interface Props {
  isSelected: boolean;
  option: SelectOption;
  onClick: (event) => void;
}

const Option: FunctionComponent<Props> = (props) => {
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
          <SvgIcon id="select-mark" icon="CHECK_MARK" color="BRAND_FONT" />
        </OptionIcon>
      </RenderIf>
      <span data-el="option-content">{option.label}</span>
    </StyledOption>
  );
};

export default Option;
