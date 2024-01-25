// InputField.jsx
import { Field, ErrorMessage } from "formik";
import { Error } from "./Error.jsx";

const InputField = ({ className, type, name, placeholder, label }) => (
  <div className={className}>
    <Field
      type={type}
      className="form-control"
      name={name}
      placeholder={placeholder}
    />
    <label htmlFor={name}>{label}</label>
    <ErrorMessage
      name={name}
      component={(props) => <Error message={props.children} />}
    />
  </div>
);

// SelectField.jsx

const SelectField = ({ className, name, label, options }) => (
  <div className={className}>
    <Field as="select" className="form-control" name={name}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </Field>
    <label htmlFor={name}>{label}</label>
    <ErrorMessage
      name={name}
      component={(props) => <Error message={props.children} />}
    />
  </div>
);

export { InputField, SelectField };
