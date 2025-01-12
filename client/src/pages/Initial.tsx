import React, { Component, ReactNode } from 'react';
import styled from 'styled-components';

import Centerer from 'components/Centerer';
import PageLayout from 'pages/Layout';

interface Props {
  onStartLoading: () => void;
}

const StyledPage = styled(PageLayout)`
  background: ${props => props.theme.colors.background};
`;

export default class InitialPage extends Component<Props, {}> {
  render(): ReactNode {
    return (
      <StyledPage>
        <Centerer horizontal vertical>
          <Centerer horizontal>
            <h1>Welcome!</h1>
            <button onClick={this.props.onStartLoading}>Start!</button>
          </Centerer>
        </Centerer>
      </StyledPage>
    );
  }
}
