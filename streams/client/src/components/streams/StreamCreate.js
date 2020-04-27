import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {!meta.error ? null : <div>{meta.error}</div>}
      </div>
    );
  }

  onSubmit(formValues) {}

  render() {
    // customize Field's props by adding addition props, which will be passed down together with component props in one object
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  let errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({ form: 'streamCreate', validate: validate })(
  StreamCreate
);
