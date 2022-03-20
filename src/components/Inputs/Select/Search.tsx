import { FunctionComponent, useRef } from 'react';
import { useFocusState } from 'hooks/UI';
import FlexBox from 'components/FlexBox';
import { StyledSearch } from './styled/search';
import { SearchIcon } from '../../Icons';

interface Props {
  value: string;
  onChange: (event) => void;
}

const Search: FunctionComponent<Props> = (props) => {
  const { value, onChange } = props;
  const inputRef = useRef(undefined);
  const isFocus = useFocusState(inputRef);

  return (
    <FlexBox align="center" padding="10px 16px 10px 32px" width="100%">
      <SearchIcon color={isFocus ? 'BRAND_FONT' : 'GRAY'} />
      <StyledSearch
        ref={inputRef}
        type="text"
        name="search"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </FlexBox>
  );
};

export default Search;
