import React from "react";
import { useFormik, FormikProvider, Form, useField } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import { getPassenger, passenger } from "//src/redux/actions";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={`form-control ${
        showFeedback ? (meta.error ? "invalid" : "valid") : ""
      }`}
    >
      <div className="flex items-center space-between">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        className="form-control"
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

export default () => {
  const dispatch = useDispatch();

  const firstName = useSelector((state) => state.inputs.firstName);
  const secondName = useSelector((state) => state.inputs.secondName);
  const passportNumber = useSelector((state) => state.inputs.passportNumber);
  const pass = useSelector((state) => state.inputs.passengerPanelOpen);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      secondName: "",
      passportNumber: ""
    },
    onSubmit: async (values) => {
      await sleep(50);
      dispatch(
        getPassenger(values.firstName, values.secondName, values.passportNumber)
      );
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(20, "Must be less  than 20 characters")
        .required("First Name is required")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Cannot contain special characters or spaces"
        ),
      secondName: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(20, "Must be less  than 20 characters")
        .required("Second Name is required")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Cannot contain special characters or spaces"
        ),
      passportNumber: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(20, "Must be less  than 20 characters")
        .required("Passport number is required")
        .matches(
          /^[a-zA-Z0-9]+$/,
          "Cannot contain special characters or spaces"
        )
    })
  });

  return (
    <FormikProvider value={formik}>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(passenger(pass))}
      >
        CLOSE
      </button>
      <Form className="form-inline">
        <div className="form-group">
          <TextInputLiveFeedback
            label="First Name"
            id="firstName"
            name="firstName"
            helpText="Must be 8-20 characters and cannot contain special characters."
            type="text"
            className="form-control"
            value={firstName}
          />
        </div>
        <div className="form-group">
          <TextInputLiveFeedback
            label="Second Name"
            id="secondName"
            name="secondName"
            helpText="Must be 8-20 characters and cannot contain special characters."
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <TextInputLiveFeedback
            label="Passport Number"
            id="passportNumber"
            name="passportNumber"
            helpText="Must be 8-20 characters and cannot contain special characters."
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group mb-2">
          <button className="btn btn-info" type="submit">
            Submit
          </button>
          <button className="btn btn-danger">Reset</button>
        </div>
      </Form>
    </FormikProvider>
  );
};
