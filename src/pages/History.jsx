import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../components/Navbar";
import { useGetPrompts } from "../hooks/useGetPrompts";

const History = () => {
  const { prompts } = useGetPrompts();
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>

        <div className="app">
          <header className="w-full flex justify-center items-center flex-col">
            <Navbar buttonName="Back" buttonLink="" />
          </header>
          {prompts.map((prompt, index) => {
            const { articleUrl, response, id } = prompt;
            return (
              <Accordion key={id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{articleUrl}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{response}</Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default History;
