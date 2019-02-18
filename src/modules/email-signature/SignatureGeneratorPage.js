import React, { Component } from 'react';
import { Formik } from 'formik';

import { EmailSignatureTemplate } from './templates';
import { SignatureForm, SignaturePreview } from './organisms';
import { EmailPlatforms, AplyingSignatureInstructions } from './molecules';
import { PLATFORM_TYPES } from './constants';

export default class SignatureGeneratorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlatform: PLATFORM_TYPES.OUTLOOK,
      signatureDetails: {},
      isLoading: false,
      isSignatureApplyed: false,
    };

    this.changePlatform = this.changePlatform.bind(this);
    this.changeSignatureDetails = this.changeSignatureDetails.bind(this);
    this.toggleApplyingSignature = this.toggleApplyingSignature.bind(this);
  }

  changePlatform(platform) {
    this.setState({ selectedPlatform: platform });
  }

  changeSignatureDetails(details) {
    if (details.photo) {
      this.setState({ isLoading: true });
      this.setState(({ signatureDetails }) => {
        let reader = new FileReader();

        reader.onloadend = () => {
          this.setState({
            isLoading: false,
            signatureDetails: { ...details, photo: reader.result },
          });
        };

        reader.readAsDataURL(details.photo);
      });
    } else {
      this.setState({
        signatureDetails: details,
      });
    }
  }

  toggleApplyingSignature() {
    this.setState(prevState => ({
      isSignatureApplyed: !prevState.isSignatureApplyed,
    }));
  }

  render() {
    return (
      <EmailSignatureTemplate
        isSignatureApplyed={this.state.isSignatureApplyed}
        emailPlatforms={
          <EmailPlatforms
            changePlatform={this.changePlatform}
            activePlatform={this.state.selectedPlatform}
          />
        }
        signatureForm={
          <Formik
            initialValues={{
              photo: '',
              name: '',
              position: '',
              direct: '',
              office: '',
            }}
            onSubmit={values => {
              this.setState({ SignatoriesValues: values });
            }}
            onChange={this.changeSignatureDetails}
          >
            {({ ...props }) => (
              <SignatureForm
                {...props}
                changeSignatureDetails={this.changeSignatureDetails}
                toggleApplyingSignature={this.toggleApplyingSignature}
                isSignatureApplyed={this.state.isSignatureApplyed}
              />
            )}
          </Formik>
        }
        signaturePreview={
          <SignaturePreview
            selectedPlatform={this.state.selectedPlatform}
            signatureDetails={this.state.signatureDetails}
          />
        }
        instructions={
          <AplyingSignatureInstructions
            selectedPlatform={this.state.selectedPlatform}
            signatureDetails={this.state.signatureDetails}
          />
        }
      />
    );
  }
}
