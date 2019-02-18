import { ThemeProvider } from 'styled-components';
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { theme, GlobalStyle } from './theme';
import { RootTemplate, ContentTemplate } from 'ui';

import SignatureGeneratorPage from './modules/email-signature/SignatureGeneratorPage';

const Header = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: #fff;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Fragment>
          <RootTemplate>
            <Header>
              <ContentTemplate>
                <header>Email signature generator</header>
              </ContentTemplate>
            </Header>
            <ContentTemplate>
              <SignatureGeneratorPage />
            </ContentTemplate>
          </RootTemplate>
          <GlobalStyle />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
