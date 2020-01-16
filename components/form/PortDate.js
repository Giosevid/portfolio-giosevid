import React, { useState, Fragment } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label, Button } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

const PortDate = (props) => {
  const [dateValue, setDateValue] = useState(moment().toDate());
  const [isHidden, setIsHidden ] = useState(false);
  const { label, form: { setFieldValue, setFieldTouched, touched, errors }, field: { name }, field, canBeDisabled } = props;

  const handleChange = date => {
    setDateValue(date);
    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  };

  const toggleDate = date => {
    setIsHidden(!isHidden);
    handleChange(date)
  };

  return (
    <FormGroup>
      <Label>{ label }</Label>
      <div className="input-group">
        { !isHidden &&
          <DatePicker
            selected={dateValue}
            onChange={handleChange}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            maxDate={moment().toDate()}
            dropdownMode="select"
          />
        }
        { canBeDisabled && !isHidden && <Button onClick={() => toggleDate(null)}>Still Working Here</Button> }
        { canBeDisabled && isHidden &&
          <Fragment>
            <span>Still Working Here</span>
            <Button onClick={() => toggleDate(dateValue)}>Set End Date</Button>
          </Fragment>
        }
        { touched[field.name] &&
        errors[field.name] && <div className="error">{errors[field.name]}</div> }
      </div>
    </FormGroup>
  );
};

export default PortDate
