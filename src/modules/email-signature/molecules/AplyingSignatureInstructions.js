import React, { Component } from 'react';
import { generateHtml } from 'lib/html';

import { PLATFORM_TYPES } from '../constants';
import {
  renderOutlookInstructions,
  renderOutlook365Instructions,
  renderThunderbirdInstructions,
  renderGmailInstructions,
  renderExchangeServerInstructions,
  renderExchangeOnlineInstructions,
} from 'lib/instructions';

export class AplyingSignatureInstructions extends Component {
  constructor() {
    super();

    this.state = {
      thunderbirdHtml: '',
      exchangeServerHtml: '',
      exchangeOnlineHtml: '',
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedPlatform !== this.props.selectedPlatform) {
      this.setState({
        thunderbirdHtml: '',
        exchangeServerHtml: '',
        exchangeOnlineHtml: '',
      });
    }
  }

  render() {
    const { selectedPlatform, signatureDetails } = this.props;

    switch (selectedPlatform) {
      case PLATFORM_TYPES.OUTLOOK:
        return renderOutlookInstructions();
      case PLATFORM_TYPES.OUTLOOK_365:
        return renderOutlook365Instructions();
      case PLATFORM_TYPES.THUNDERBIRD:
        return renderThunderbirdInstructions(this.state.thunderbirdHtml, () => {
          this.setState({
            thunderbirdHtml: generateHtml(signatureDetails),
          });
        });
      case PLATFORM_TYPES.GMAIL:
        return renderGmailInstructions();
      case PLATFORM_TYPES.EXCHANGE_SERVER:
        return renderExchangeServerInstructions(
          this.state.exchangeServerHtml,
          () => {
            this.setState({
              exchangeServerHtml: generateHtml(signatureDetails),
            });
          }
        );
      case PLATFORM_TYPES.EXCHANGE_ONLINE:
        return renderExchangeOnlineInstructions(
          this.state.exchangeOnlineHtml,
          () => {
            this.setState({
              exchangeOnlineHtml: generateHtml(signatureDetails),
            });
          }
        );

      default:
        return <h2>Pleace select platform</h2>;
    }
  }
}
