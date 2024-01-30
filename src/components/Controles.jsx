import {
    MenuItem,
    TextField,
    Select,
    InputLabel,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import moment from "moment";
import "moment/locale/es";
moment.locale("de");
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Field, ErrorMessage } from "formik";
import { FormControl, FormHelperText } from "@mui/material";

const FormikTextField = ({ name, label, ...otherProps }) => (
    <Field name={name}>
        {({ field, meta }) => (
            <TextField
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
            <FormControl
                error={form.touched[name] && Boolean(form.errors[name])}
                {...otherProps}
            >
                <InputLabel id={`${name}-label`}>{label}</InputLabel>
                <Select
                    labelId={`${name}-label`}
                    id={name}
                    {...field}
                    label={label}
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
                {form.touched[name] && form.errors[name] && (
                    <FormHelperText>{form.errors[name]}</FormHelperText>
                )}
            </FormControl>
        )}
    </Field>
);
const FormikDatePicker = ({ name, label, ...otherProps }) => (
    <Field name={name}>
        {({ field, form }) => (
            <LocalizationProvider
                dateAdapter={AdapterMoment}
                adapterLocale="es"
            >
                <DatePicker
                    {...field}
                    label={label}
                    format="DD/MM/YYYY"
                    value={field.value ? moment(field.value) : null}
                    onChange={(value) => form.setFieldValue(name, value)}
                    {...otherProps}
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

const FormikCheckbox = ({ name, label, ...otherProps }) => (
    <Field name={name}>
        {({ field, form }) => (
            <FormControlLabel
                control={
                    <Checkbox
                        {...field}
                        {...otherProps}
                        checked={field.value}
                        onChange={(event) => {
                            form.setFieldValue(name, event.target.checked);
                        }}
                    />
                }
                label={label}
            />
        )}
    </Field>
);
export { FormikTextField, FormikSelectField, FormikDatePicker, FormikCheckbox };
