import { ShoppingCartCheckout } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Paper,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { BusinessForm } from "./BusinessForm";
import { PersonalForm } from "./PersonalForm";
import { PlanToggle } from "../Pricing/PlanToggle";
import { Field } from "formik";

const AnimatedButton = motion(motion(Button));

export const PurchaseForm = ({ values, plan, setPlan, isSubmitting }) => (
  <Paper elevation={0} className="px-6 py-4 m-8">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary-blue">Purchase Storage</h1>
      <PlanToggle option={plan} size="small" setOption={setPlan} />
    </div>
    <div className="flex flex-col gap-6 my-4">
      {values.planType === "business" ? (
        <BusinessForm members={values.details.members} />
      ) : (
        <PersonalForm />
      )}
      <Field name="agree">
        {({ field, meta: { error, touched } }) => (
          <FormControl
            required
            error={Boolean(error && touched)}
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormGroup>
              <FormControlLabel
                fullWidth
                control={<Checkbox disableRipple />}
                label="Agree to terms and services of Biro251 product"
                {...field}
              />
            </FormGroup>
            {error && touched && <FormHelperText>{error}</FormHelperText>}
          </FormControl>
        )}
      </Field>

      <Stack alignItems="end">
        <AnimatedButton
          variant="contained"
          disableRipple
          disableElevation
          type="submit"
          startIcon={<ShoppingCartCheckout />}
          disabled={isSubmitting}
          loading={isSubmitting}
          sx={{
            textTransform: "capitalize",
          }}
          whileHover={{
            shadow: 10,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Purchase
        </AnimatedButton>
      </Stack>
    </div>
  </Paper>
);
