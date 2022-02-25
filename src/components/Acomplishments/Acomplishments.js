import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "Email", text: "contact@opeyemiojo.com" },
  { number: "LinkedIn", text: "Opeyemi Ojo" },
  { number: "Github", text: "github.com/opyjo" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Get in Touch</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
