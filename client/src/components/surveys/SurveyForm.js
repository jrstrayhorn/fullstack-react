// SurveyForm shows a form for a user to add input
import React from 'react';
import { reduxForm, Field } from 'redux-form';

class SurveyForm extends React.Component {
  render() {
    return (
      <div>
        <Field type="text" name="surveyTitle" component="input" />
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
