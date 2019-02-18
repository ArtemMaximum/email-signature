import { createGlobalStyle } from 'styled-components';
import { mediaMaxWidth } from './lib/sizes';

export const theme = {
  colors: {
    primary: '#eee',
    primaryDark: '#333',
  },
  pixels: {
    contentWidth: 1280,
  },
};

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.15;
    font-family: Raleway, Verdana;
  }

  * {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  ${mediaMaxWidth('tablet')} {
    body, html {
      font-size: 14px;
    }
  }
`;
