import React, { Component } from 'react';
import styled from 'styled-components';

const SignatureWrappper = styled.div`
  background-color: #fff;
  padding: 16px 0;
`;

// const Table = styled.table`
//   width: auto;
//   color: #979da2;

//   padding: 16px 0;
//   max-width: 490px;
//   min-width: 490px;
//   width: 100%;
// `;

// const Photo = styled.div`
//   margin: 0 16px;
//   border-radius: 50%;
//   overflow: hidden;
//   width: 99px;
//   height: 99px;
// `;

export class SignaturePreview extends Component {
  render() {
    const {
      signatureDetails: { photo, name, position, direct, office },
    } = this.props;

    return (
      <SignatureWrappper id="signaturePreview">
        <table
          style={{
            width: 480,
            fontSize: '9pt',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '14px',
            margin: 18,
          }}
          cellPadding="0"
          cellSpacing="0"
        >
          <tbody>
            <tr>
              <td
                style={{ width: 120, verticalAlign: 'middle' }}
                valign="middle"
              >
                <a
                  href="https://www.codetwo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    border="0"
                    alt="Logo"
                    width="88"
                    height="88"
                    style={{
                      width: 88,
                      height: 88,
                      border: 0,
                      borderRadius: '50%',
                    }}
                    src={photo}
                  />
                </a>
              </td>
              <td
                style={{
                  width: 360,
                  color: '#131313',
                  fontFamily: 'Arial, sans-serif',
                  verticalAlign: 'middle',
                }}
                valign="middle"
              >
                <table cellPadding="0" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td style={{ padding: '1px' }}>
                        <strong
                          style={{
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '15pt',
                            color: '#131313',
                          }}
                        >
                          {name}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1px' }}>
                        <span
                          style={{
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '9pt',
                            color: '#131313',
                          }}
                        >
                          {position}, Super Dispatch
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1px' }}>
                        <span
                          style={{
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '9pt',
                            color: '#131313',
                          }}
                        >
                          Office: {office}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '1px' }}>
                        <span
                          style={{
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '9pt',
                            color: '#131313',
                          }}
                        >
                          Direct: {direct}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </SignatureWrappper>
    );
  }
}
