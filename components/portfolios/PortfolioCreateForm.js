import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Alert } from 'reactstrap'
import PortInput from "../form/PortInput"
import PortDate from "../form/PortDate"
import moment from "moment"

const validateInputs = values => {
  const errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!value && key !== 'endDate') {
      errors[key] = `Field ${key} is required!...`
    }
  });

  const startDate = values.startDate;
  const endDate = values.endDate;

  if (startDate && endDate && moment(endDate).isBefore(startDate)) {
    errors.endDate = 'End Date cannot be before start date!...'
  }

  return errors;
};

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
};

const required  = (str) => {
  if (str.length === 0) return "Is required"
};

const futureDate  = (str) => {
  if (str.length > 10) return "Should be in future"
};

const compose = (...validators) => (value) =>  {
    return validators.map(validate => validate(value)).find(Boolean);
};

const validator = compose(required, futureDate);

const PortfolioCreateForm = ({ onSubmit, error }) => (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" label="Title" name="title" component={PortInput} />
          <Field type="text" label="Company" name="company" component={PortInput} validate />
          <Field type="text" label="Location" name="location" component={PortInput} />
          <Field type="text" label="Position" name="position" component={PortInput} />
          <Field type="textarea" label="Description" name="description" component={PortInput} />
          <Field label="Start Date" name="startDate" component={PortDate}/>
          <Field label="End Date" name="endDate" component={PortDate} canBeDisabled/>

          { error && <Alert color="danger">{error}</Alert> }

          <Button type="submit" disabled={isSubmitting} color="success" size="lg">
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;
