import { Field, ErrorMessage } from "formik";
import { Error } from "./Error.jsx";
import "react-datepicker/dist/react-datepicker.css";

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
        <Field as="select" className="form-select" name={name}>
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

const DatePickerField = ({ className, name, label, placeholder }) => {
    return (
        <div className={className}>
            <Field
                type="date"
                className="form-control  text-light "
                name={name}
                placeholder={placeholder}
                style={{ backgroundColor: "var(--aepa-form-bg)" }}
            />
            <label htmlFor={name}>{label}</label>
            <ErrorMessage
                name={name}
                component={(props) => <Error message={props.children} />}
            />
        </div>
    );
};

const CheckboxField = ({ className, name, label }) => (
    <div className={className}>
        <Field name={name} className="form-check-input" type="checkbox"></Field>
        <label className="form-check-label" htmlFor={name}>
            {label}
        </label>
        <ErrorMessage
            name={name}
            component={(props) => <Error message={props.children} />}
        />
    </div>
);

export { InputField, SelectField, DatePickerField, CheckboxField };
