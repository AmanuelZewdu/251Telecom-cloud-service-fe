import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  toggleButtonGroupClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [`& .${toggleButtonGroupClasses.grouped}`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: 20,
    padding: "6px 16px",
    textTransform: "capitalize",
    fontWeight: "semibold",
    [`&.${toggleButtonGroupClasses.disabled}`]: {
      border: 0,
    },
  },
  [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
      marginLeft: -1,
      borderLeft: "1px solid transparent",
    },
}));

export const PlanToggle = ({ option, setOption, size = "medium" }) => (
  <Paper
    elevation={0}
    sx={(theme) => ({
      border: 0,
      borderRadius: 20,
      width: "fit-content",
      display: "flex",
      border: `1px solid ${theme.palette.divider}`,
      flexWrap: "wrap",
    })}
  >
    <StyledToggleButtonGroup
      size={size}
      color="success"
      value={option}
      exclusive
      onChange={(e, option) => setOption(option)}
      aria-label="pricing option"
    >
      <ToggleButton disableRipple value="business" aria-label="business">
        Business
      </ToggleButton>
      <ToggleButton disableRipple value="personal" aria-label="personal">
        Personal
      </ToggleButton>
    </StyledToggleButtonGroup>
  </Paper>
);
