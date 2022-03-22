import React, { FunctionComponent, useCallback } from 'react';
import RenderIf from 'components/RenderIf';
import SvgIcon from '../Icons';
import { usePickListContext } from './context';
import { StyledItem, Touchable } from './styled/item';
import AbsoluteContent from '../AbsoluteContent';

interface Props {
  value: string;
  dashed?: boolean;
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
}

const PickItem: FunctionComponent<Props> = (props) => {
  const { value, color: itemColor, dashed, children } = props;
  const {
    value: selectedValue,
    onChange,
    size,
    color: parentColor,
    flatMarker,
    multiple,
    readonly,
  } = usePickListContext();

  const handleOnClick = useCallback(() => onChange(value), [onChange, value]);

  const isSelected = (
    multiple
      ? (selectedValue as string[]).some(v => v === value)
      : selectedValue === value
  );
  const color = itemColor || parentColor;
  const markerColor: any = flatMarker ? 'WHITE' : color.toUpperCase();

  return (
    <StyledItem tabIndex={-1} size={size}>
      <Touchable
        tabIndex={readonly ? -1 : 0}
        color={color}
        dashed={dashed}
        readonly={readonly}
        isSelected={isSelected}
        onClick={handleOnClick}
        data-pick-item-value={value}
        data-pick-item-selected={isSelected}
      >
        {children}
        <RenderIf condition={isSelected}>
          <AbsoluteContent top={4} right={4}>
            <SvgIcon
              color={markerColor}
              icon="CHECK_CIRCLE_FILL"
            />
          </AbsoluteContent>
        </RenderIf>
      </Touchable>
    </StyledItem>
  );
};

export default PickItem;
