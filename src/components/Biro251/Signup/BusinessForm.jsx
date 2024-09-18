import { AddTwoTone, Close } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid2,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import { FieldArray, Field } from "formik";
import { motion } from "framer-motion";
import { QuotaSelect } from "./QuotaSelect";

export const BusinessForm = ({ members }) => {
  return (
    <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <Stack spacing={1}>
        <h4 className="text-lg font-semibold">Team Information</h4>
        <Grid2 container spacing={2}>
          <Grid2 size={5}>
            <Field name="details.teamName">
              {({ field, meta: { error, touched } }) => (
                <TextField
                  size="small"
                  fullWidth
                  label="Team Name"
                  variant="outlined"
                  {...field}
                  error={Boolean(touched && error)}
                  helperText={touched && error ? error : null}
                />
              )}
            </Field>
          </Grid2>
          <Grid2 size={5}>
            <Field name="details.quota">
              {({ field, meta }) => (
                <QuotaSelect
                  field={field}
                  meta={meta}
                  label="Team Member Quota"
                  noLabel={false}
                />
              )}
            </Field>
          </Grid2>
        </Grid2>
      </Stack>
      <Stack spacing={1}>
        <FieldArray name="details.members">
          {({ remove, push }) => (
            <>
              <Stack
                direction="row"
                justifyContent="space-between"
                spacing={2}
                mt={4}
              >
                {console.log(members)}
                <h4 className="text-lg font-semibold">Personal Information</h4>
                <Button
                  size="small"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: 20,
                    px: 2,
                  }}
                  onClick={() =>
                    push({
                      firstName: "",
                      lastName: "",
                      email: "",
                      password: "",
                      quota: "",
                    })
                  }
                  startIcon={<AddTwoTone />}
                >
                  Add
                </Button>
              </Stack>{" "}
              <Stack direction="row" alignItems="center" spacing={1}>
                <div className="text-sm text-slate-400 opacity-0">
                  {"0".repeat(members.length.toString().length + 1)}
                </div>
                <Grid2 container spacing={1} flex={1}>
                  <Grid2 size={2}>First name</Grid2>
                  <Grid2 size={2}>Last Name</Grid2>
                  <Grid2 size={3}>Email</Grid2>
                  <Grid2 size={2}>Password</Grid2>
                  <Grid2 size={3}>Quota</Grid2>
                </Grid2>
                <IconButton sx={{ opacity: 0 }}>
                  <Close />
                </IconButton>
              </Stack>
              {members.map((_, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  key={index}
                >
                  <div className="text-sm text-slate-400 ">#{index + 1}</div>
                  <Grid2 container spacing={1}>
                    <Grid2 size={2}>
                      <Field name={`details.members[${index}].firstName`}>
                        {({ field, meta: { error, touched } }) => (
                          <TextField
                            size="small"
                            fullWidth
                            placeholder="First"
                            variant="outlined"
                            error={Boolean(touched && error)}
                            helperText={touched ? error : null}
                            {...field}
                          />
                        )}
                      </Field>
                    </Grid2>
                    <Grid2 size={2}>
                      <Field name={`details.members[${index}].lastName`}>
                        {({ field, meta: { error, touched } }) => (
                          <TextField
                            size="small"
                            fullWidth
                            placeholder="Last"
                            variant="outlined"
                            error={Boolean(touched && error)}
                            helperText={touched ? error : null}
                            {...field}
                          />
                        )}
                      </Field>
                    </Grid2>
                    <Grid2 size={3}>
                      <Field name={`details.members[${index}].email`}>
                        {({ field, meta: { error, touched } }) => (
                          <TextField
                            size="small"
                            fullWidth
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
                    <Grid2 size={2}>
                      <Field name={`details.members[${index}].password`}>
                        {({ field, meta: { error, touched } }) => (
                          <TextField
                            size="small"
                            fullWidth
                            placeholder="Password"
                            variant="outlined"
                            helperText={touched ? error : null}
                            error={Boolean(touched && error)}
                            {...field}
                          />
                        )}
                      </Field>
                    </Grid2>
                    <Grid2 size={3}>
                      <Field name={`details.members[${index}].quota`}>
                        {({ field, meta }) => (
                          <QuotaSelect field={field} meta={meta} />
                        )}
                      </Field>
                    </Grid2>
                  </Grid2>
                  <IconButton
                    onClick={() => members.length > 1 && remove(index)}
                    color="error"
                    disabled={members.length < 2}
                    title={
                      members.length > 1
                        ? "delete this row"
                        : "At least one member is required"
                    }
                  >
                    <Close />
                  </IconButton>
                </Stack>
              ))}
            </>
          )}
        </FieldArray>
      </Stack>
    </motion.div>
  );
};
