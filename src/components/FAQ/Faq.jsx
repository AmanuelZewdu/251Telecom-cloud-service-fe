import "./faq.scss";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FAQ } from "../../shared/data/data";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

export default function AccordionUsage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#BC68B2",
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="relative w-full flex flex-col items-center lg:gap-6 mx-8 font-montserrat p-4 pb-12 faq">
        <div className="flex flex-col text-[#f5f5f5] text-center gap-4 py-4 items-center">
          <h1 className="text-3xl">
            <span className="relative line">FAQ</span>{" "}
          </h1>
          <p className="">
            Here you can find the most frequently asked questions
          </p>
        </div>
        <Box className="flex flex-col gap-4">
          {FAQ.map((faq) => (
            <Accordion key={faq.id} className="max-w-[70em]">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#f5f5f5" }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  background: "linear-gradient(to right, #17629d, #26a9e0)",
                  color: "#f5f5f5",
                  paddingX: "1em",
                  paddingY: "0.5em",
                }}
                // className="shadow-xl"
              >
                <span className="text-[#f5f5f5]">{faq.question}</span>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="flex flex-col gap-2">
                  {faq.answer.map((answer) => (
                    <li key={faq.id} className="flex gap-2 items-baseline">
                      <CheckCircleIcon
                        color="primary"
                        sx={{
                          fontSize: "16px",
                        }}
                        className="relative top-[0.15em]"
                      />
                      <span>{answer}</span>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
