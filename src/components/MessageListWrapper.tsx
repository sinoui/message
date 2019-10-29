import styled from 'styled-components';

const MessageListWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
  top: 16px;
  right: 0;
  left: 0;
  z-index: ${(props) => props.theme.zIndex.snackbar};
  line-height: 1.5;
  font-size: ${(props) => props.theme.typography.body1.fontSize}rem;
  font-family: ${(props) => props.theme.typography.fontFamily};
  color: ${(props) => props.theme.palette.text.primary};
  pointer-events: none;
  box-sizing: border-box;
`;

export default MessageListWrapper;
