import { MenuItem, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Field, ErrorMessage } from "formik";
const FormikTextField = ({ name, label, ...otherProps }) => (
    <Field name={name}>
        {({ field, meta }) => (
            <TextField
                className="m-3"
                {...field}
                {...otherProps}
                label={label}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
            />
        )}
    </Field>
);

const FormikSelectField = ({ name, label, options, ...otherProps }) => (
    <Field name={name}>
        {({ field, form }) => (
            <TextField
                select
                {...field}
                {...otherProps}
                label={label}
                error={form.touched[name] && Boolean(form.errors[name])}
                helperText={form.touched[name] && form.errors[name]}
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        )}
    </Field>
);

const FormikDatePicker = ({ name, label, ...otherProps }) => (
    <Field name={name}>
        {({ field, form }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    className="m-3"
                    {...field}
                    {...otherProps}
                    label={label}
                    value={field.value || null}
                    onChange={(value) => form.setFieldValue(name, value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            error={
                                form.touched[name] && Boolean(form.errors[name])
                            }
                            helperText={form.touched[name] && form.errors[name]}
                        />
                    )}
                />
            </LocalizationProvider>
        )}
    </Field>
);

export { FormikTextField, FormikSelectField, FormikDatePicker };
