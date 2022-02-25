import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello, <br />
          My name is Opeyemi Ojo
        </SectionTitle>
        <SectionText>
          I combine my coding skills and my project management experience to
          build comprehensive web applications. I am always looking for ways to
          add value through code.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
