import React, { FunctionComponent, useCallback } from 'react';
import { PositionProps } from 'helpers';
import { PickListProvider } from './context';
import ListContainer from './ListContainer';
import GridContainer from './GridContainer';

export interface PickListProps extends PositionProps {
  value?: string | string[];
  onChange?: (value) => void;
  layout?: 'list' | 'grid';
  cols?: number;
  readonly?: boolean;
  multiple?: boolean;
  size?: 'small' | 'medium' | 'large';
  color?: 'brand' | 'accent' | 'success' | 'info' | 'warning' | 'error';
  flatMarker?: boolean;
}

const wrapperMap = {
  list: ListContainer,
  grid: GridContainer,
};

const PickList: FunctionComponent<PickListProps> = (props) => {
  const {
    value,
    onChange,
    multiple,
    size,
    color,
    layout,
    flatMarker,
    readonly,
    children,
  } = props;
  const Wrapper = wrapperMap[layout];

  const handleChange = useCallback((item) => {
    if (value === undefined || value === null || !onChange) {
      return;
    }

    if (multiple) {
      const isSelected = (value as string[]).some((v) => v === item);
      const nextValue = isSelected
        ? (value as string[]).filter(v => v !== item)
        : (value as string[]).concat([item]);

      onChange(nextValue);
    } else {
      onChange(item);
    }
  }, [onChange, value]);


  return (
    <PickListProvider
      size={size}
      color={color}
      value={value}
      readonly={readonly}
      multiple={multiple}
      onChange={handleChange}
      flatMarker={flatMarker}
    >
      <Wrapper {...props}>
        {children}
      </Wrapper>
    </PickListProvider>

  );
};

PickList.defaultProps = {
  size: 'medium',
  color: 'brand',
  layout: 'grid',
  cols: 3,
};

export default PickList;
