import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';

export class SignatureForm extends Component {
  render() {
    const {
      values,
      // errors,
      // touched,
      handleChange,
      handleBlur,
      setFieldValue,
      handleSubmit,
      changeSignatureDetails,
      toggleApplyingSignature,
      isSignatureApplyed,
    } = this.props;

    const customHandleChange = v => {
      handleChange(v);
      changeSignatureDetails({ ...values, [v.target.name]: v.target.value });
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <legend>Select image</legend>
          <Input
            id="photo"
            name="photo"
            type="file"
            onChange={event => {
              setFieldValue('photo', event.currentTarget.files[0]);
              changeSignatureDetails({
                ...values,
                photo: event.currentTarget.files[0],
              });
            }}
          />
          <br />
          <legend>Full name</legend>
          <Input
            name="name"
            onChange={customHandleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <br />
          <legend>Position</legend>
          <Input
            name="position"
            onChange={customHandleChange}
            onBlur={handleBlur}
            value={values.position}
          />
          <br />
          <legend>Direct</legend>
          <Input
            name="direct"
            onChange={customHandleChange}
            onBlur={handleBlur}
            value={values.direct}
          />
          <br />
          <legend>Office</legend>
          <Input
            name="office"
            onChange={customHandleChange}
            onBlur={handleBlur}
            value={values.office}
          />
          <br />
          <br />
          {!isSignatureApplyed ? (
            <Button type="submit" onClick={toggleApplyingSignature}>
              Apply your signature ›
            </Button>
          ) : (
            <Button type="button" onClick={toggleApplyingSignature}>
              ‹ Show signature preview
            </Button>
          )}
        </div>
      </form>
    );
  }
}
