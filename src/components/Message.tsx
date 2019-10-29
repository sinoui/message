import styled from 'styled-components';

const Message = styled.div`
  display: inline-flex;
  align-items: flex-start;
  padding: 10px 16px;
  margin: 4px 0;
  background-color: ${(props) => props.theme.palette.background.paper};
  box-shadow: ${(props) => props.theme.shadows[1]};
  border-radius: 4px;
  pointer-events: all;
`;

export default Message;
