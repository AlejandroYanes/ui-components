import styled from 'styled-components';

const getContentAlignment = (props) => {
  const { centerContent } = props;
  
  return `
    justify-content: ${centerContent ? 'center' : 'flex-start'};
    padding: ${centerContent ? '0 38px' : '0'};
  `;
};

export const StyledHeader = styled.div.attrs((props: any) => props)`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: ${getContentAlignment};
`;
