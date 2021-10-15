import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useAppLayout } from 'components/Configuration';
import RenderIf from 'components/RenderIf';
import { IconButton } from 'components/Button';
import { Edge, StyledListContainer, Wrapper } from './styled/list-container';
import { StyledList } from './styled/list';
import { PickListProps } from './PickList';

const sizeMap = { large: 210, medium: 160, small: 110 };

const ListContainer: FunctionComponent<PickListProps> = (props) => {
  const { children, size, ...rest } = props;
  const layout = useAppLayout();
  const [showArrows, setShowArrows] = useState(false);
  const containerRef = useRef(undefined);
  const listRef = useRef(undefined);

  const handleLeftEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(-sizeMap[size], 0);
  }, [size]);

  const handleRightEdgeClick = useCallback(() => {
    containerRef.current.scrollBy(sizeMap[size], 0);
  }, [size]);

  useEffect(() => {
    const containerWidth = containerRef.current.getBoundingClientRect().width;
    const listWidth = listRef.current.getBoundingClientRect().width;

    if (listWidth > containerWidth) {
      setShowArrows(true);
    } else {
      setShowArrows(false);
    }
  }, [layout, children]);

  return (
    <Wrapper {...rest} data-el="pick_list-wrapper">
      <RenderIf condition={showArrows}>
        <Edge side="left" data-el="pick_list-left_edge">
          <IconButton
            onClick={handleLeftEdgeClick}
            icon="CHEVRON_LEFT"
            variant="flat"
            color="background"
          />
        </Edge>
      </RenderIf>
      <StyledListContainer ref={containerRef} data-el="pick_list-list_container">
        <StyledList ref={listRef}>
          {children}
        </StyledList>
      </StyledListContainer>
      <RenderIf condition={showArrows}>
        <Edge side="right" data-el="pick_list-right_edge">
          <IconButton
            onClick={handleRightEdgeClick}
            icon="CHEVRON_RIGHT"
            variant="flat"
            color="background"
          />
        </Edge>
      </RenderIf>

    </Wrapper>
  );
};

export default ListContainer;
