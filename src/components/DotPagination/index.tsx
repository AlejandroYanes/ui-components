import { FunctionComponent } from 'react';
import { PositionProps } from 'helpers';
import { Container, Dot } from './styled';

interface Props extends PositionProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
  color?: 'brand' | 'accent';
}

const DotPagination: FunctionComponent<Props> = (props) => {
  const { total, page, onChange, color } = props;

  const dots = new Array(total).fill(1).map((_, index) => (
    <Dot
      key={index}
      role="button"
      color={color}
      active={index === page}
      onClick={() => onChange(index)}
    />
  ));

  return (
    <Container>{dots}</Container>
  );
};

DotPagination.defaultProps = {
  color: 'brand',
};

export default DotPagination;
