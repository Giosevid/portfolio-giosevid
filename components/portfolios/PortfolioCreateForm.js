import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Alert } from 'reactstrap'
import PortInput from "../form/PortInput"
import PortDate from "../form/PortDate"
import moment from "moment";

const validateInputs = (values) => {
  let errors = {};
  Object.entries(values).forEach(([key, value]) => {
    if (!value && key !== "endDate" && key !== "startDate")
      errors[key] = `Field ${ key } is required!`;
  });

  const startDate =  moment(values.startDate).toDate();
  const endDate =  moment(values.endDate).toDate();

  if (startDate && endDate && endDate < startDate) {
    errors.endDate = "End date cannot be before start date!";
  }

  return errors;
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

const PortfolioCreateForm = ({ onSubmit, error, initialValues }) => (
  <div>
    { initialValues && Object.entries(initialValues).length > 0  &&
    <Formik
      initialValues={ initialValues }
      validate={ validateInputs }
      onSubmit={ onSubmit }
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" label="Title" name="title" component={ PortInput } />
          <Field type="text" label="Company" name="company" component={ PortInput } />
          <Field type="text" label="Location" name="location" component={ PortInput } />
          <Field type="text" label="Position" name="position" component={ PortInput } />
          <Field type="textarea" label="Description" name="description" component={PortInput} />
          <Field
            label="Start Date"
            name="startDate"
            initialDate={ initialValues.startDate }
            component={ PortDate }
          />
          <Field
            label="End Date"
            name="endDate"
            canBeDisabled={ true }
            initialDate={ initialValues.endDate }
            component={ PortDate }
          />

          { error && <Alert color="danger">{ error }</Alert> }

          <Button type="submit" color="success" size="lg" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
    }
  </div>
);

export default PortfolioCreateForm;
