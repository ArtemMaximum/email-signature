import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled from 'styled-components';

import outlookImg from 'assets/images/outlook.png';
import outlook365Img from 'assets/images/outlook365.png';
import thunderbirdImg from 'assets/images/thunderbird.png';
import gmailImg from 'assets/images/gmail.png';
import exchangeImg from 'assets/images/exchange.png';
import exchangeOnlineImg from 'assets/images/exchangeonline.png';

import { PLATFORM_TYPES } from '../constants';

const Card = styled.div`
  padding: 10px;
  background: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  text-align: center;
  font-size: 12px;
  border: 2px solid
    ${({ platform, activePlatform }) =>
      platform === activePlatform ? '#000' : 'transparent'};
`;

export class EmailPlatforms extends Component {
  render() {
    const { changePlatform, activePlatform } = this.props;
    return (
      <div>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <Card
              activePlatform={activePlatform}
              platform={PLATFORM_TYPES.OUTLOOK}
              onClick={() => {
                changePlatform(PLATFORM_TYPES.OUTLOOK);
              }}
            >
              <img src={outlookImg} alt="Outlook" />
              <br />
              Outlook
            </Card>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <Card
              activePlatform={activePlatform}
              platform={PLATFORM_TYPES.OUTLOOK_365}
              onClick={() => {
                changePlatform(PLATFORM_TYPES.OUTLOOK_365);
              }}
            >
              <img src={outlook365Img} alt="Outlook 365" />
              <br />
              Outlook 365
            </Card>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <Card
              activePlatform={activePlatform}
              platform={PLATFORM_TYPES.THUNDERBIRD}
              onClick={() => {
                changePlatform(PLATFORM_TYPES.THUNDERBIRD);
              }}
            >
              <img src={thunderbirdImg} alt="Thunderbird" />
              <br />
              Thunderbird
            </Card>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <Card
              activePlatform={activePlatform}
              platform={PLATFORM_TYPES.GMAIL}
              onClick={() => {
                changePlatform(PLATFORM_TYPES.GMAIL);
              }}
            >
              <img src={gmailImg} alt="Gmail" />
              <br />
              Gmail
            </Card>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <Card
              activePlatform={activePlatform}
              platform={PLATFORM_TYPES.EXCHANGE_SERVER}
              onClick={() => {
                changePlatform(PLATFORM_TYPES.EXCHANGE_SERVER);
              }}
            >
              <img src={exchangeImg} alt="Exchange Server" />
              <br />
              Exchange Server
            </Card>
          </Col>
          <Col md={4} sm={6} xs={6}>
            <Card
              activePlatform={activePlatform}
              platform={PLATFORM_TYPES.EXCHANGE_ONLINE}
              onClick={() => {
                changePlatform(PLATFORM_TYPES.EXCHANGE_ONLINE);
              }}
            >
              <img src={exchangeOnlineImg} alt="Exchange online" />
              <br />
              Exchange online
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
