import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { colors, createPalette, createTheme } from '@sinoui/theme';
import message from '../src';

const items = ['pink', 'purple', 'teal', 'blue'];

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div<{ selected?: boolean }>`
  height: 60px;
  width: 60px;
  margin: 4px;
  background-color: ${(props) => colors[props.color][500]};
  ${(props) =>
    props.selected && `-webkit-box-shadow: 0 0 5px rgba(0, 113, 241, 1);`};
`;

function ThemeButtons() {
  const [selectedColor, setSelectedColor] = useState('');
  const handleClick = useCallback((color) => {
    setSelectedColor(color);
    if (color === 'purple') {
      const palette = createPalette({ primary: colors[color], type: 'dark' });
      message.setTheme(createTheme({ palette }));
    } else {
      const palette = createPalette({ primary: colors[color] });
      message.setTheme(createTheme({ palette }));
    }
  }, []);
  return (
    <Wrapper>
      {items.map((item) => (
        <Content
          color={item}
          onClick={() => handleClick(item)}
          selected={item === selectedColor}
        />
      ))}
    </Wrapper>
  );
}

export default ThemeButtons;
