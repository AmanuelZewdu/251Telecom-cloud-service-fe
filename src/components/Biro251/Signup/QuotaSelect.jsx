import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const values = [
  { label: "Unlimited", value: "none" },
  { label: "Default", value: "" },
  { value: "1 GB" },
  { value: "3 GB" },
  { value: "5 GB" },
  { value: "10 GB" },
];

export const QuotaSelect = ({
  field,
  meta: { error, touched },
  noLabel = true,
  label = "Quota",
}) => {
  const hasError = Boolean(touched && error);
  return (
    <FormControl fullWidth error={hasError} size="small">
      {!noLabel && <InputLabel id="quota-select">{label}</InputLabel>}
      <Select
        displayEmpty={noLabel}
        error={error}
        labelId="quota-select"
        id="quota"
        label={noLabel ? null : label}
        {...field}
      >
        {values.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label || value}
          </MenuItem>
        ))}
      </Select>
      {hasError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
