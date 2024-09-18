import {
  FormControl,
  FormHelperText,
  Grid2,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Field } from "formik";
import { motion } from "framer-motion";
import { QuotaSelect } from "./QuotaSelect";

export const PersonalForm = () => {
  return (
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Field name="details.firstName">
            {({ field, meta: { error, touched } }) => (
              <TextField
                size="small"
                fullWidth
                label="First name"
                variant="outlined"
                error={Boolean(touched && error)}
                helperText={touched ? error : null}
                {...field}
              />
            )}
          </Field>
        </Grid2>
        <Grid2 size={3}>
          <Field name={`details.lastName`}>
            {({ field, meta: { error, touched } }) => (
              <TextField
                size="small"
                fullWidth
                label="Last name"
                variant="outlined"
                error={Boolean(touched && error)}
                helperText={touched ? error : null}
                {...field}
              />
            )}
          </Field>
        </Grid2>
        <Grid2 size={6}>
          <Field name={`details.email`}>
            {({ field, meta: { error, touched } }) => (
              <TextField
                size="small"
                fullWidth
                label="Email"
                placeholder="example@cloud251.com"
                type="email"
                variant="outlined"
                error={Boolean(touched && error)}
                helperText={touched ? error : null}
                {...field}
              />
            )}
          </Field>
        </Grid2>
        <Grid2 size={6}>
          <Field name={`details.password`}>
            {({ field, meta: { error, touched } }) => (
              <TextField
                size="small"
                fullWidth
                type="password"
                label="Password"
                variant="outlined"
                error={Boolean(touched && error)}
                helperText={touched ? error : null}
                {...field}
              />
            )}
          </Field>
        </Grid2>
        <Grid2 size={6}>
          <Field name={`details.quota`}>
            {({ field, meta }) => (
              <QuotaSelect field={field} meta={meta} noLabel={false} />
            )}
          </Field>
        </Grid2>
      </Grid2>
    </motion.div>
  );
};
