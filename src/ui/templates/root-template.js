import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RootTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContentConstructor = ({ className, children }) => (
  <div className={className}>
    <RootTemplateContainer>{children}</RootTemplateContainer>
  </div>
);

export const RootTemplate = styled(ContentConstructor)`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;

RootTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
