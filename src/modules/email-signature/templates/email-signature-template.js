import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'reactstrap';

const Spreader = styled.div`
  top: 0;
  left: 0;
  position: ${({ isHidden }) => (isHidden ? 'absolute' : 'relative')};
  transform: ${({ isHidden }) =>
    isHidden ? 'translateX(-300%)' : 'translateX(0)'};
`;

const EmailSignatureConstructor = ({
  className,
  instructions,
  emailPlatforms,
  signatureForm,
  signaturePreview,
  isSignatureApplyed,
}) => (
  <Row className={className}>
    <Col md={6}>
      {emailPlatforms}
      {signatureForm}
    </Col>
    <Col md={6}>
      <Spreader isHidden={isSignatureApplyed}>{signaturePreview}</Spreader>
      <Spreader isHidden={!isSignatureApplyed}>{instructions}</Spreader>
    </Col>
  </Row>
);

export const EmailSignatureTemplate = styled(EmailSignatureConstructor)`
  display: flex;
  justify-content: center;
`;

EmailSignatureTemplate.propTypes = {
  emailPlatforms: PropTypes.node.isRequired,
  signatureForm: PropTypes.node.isRequired,
  signaturePreview: PropTypes.node.isRequired,
};
