import React from 'react';

import { Section, SectionText, SectionTitle,SectionTitleTwo,SectionDividerTwo } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from "typewriter-effect";
const Hero = (props) => (
  <>
  <Section >
    <LeftSection>
      <SectionTitle main center>
      Hi,<br />
      I am Amol.
      <p></p>
      <br />
      <SectionDividerTwo/>
      </SectionTitle>
      <SectionTitleTwo >
        I'm a <Typewriter options={{
          autoStart:true,
          loop:true,
          delay:40,
          strings:[
            "Student.",
            "Web Developer.",
            "Engineer.",
            "Tech Enthusiast.",
            "Developer.",
            "Philomath.",
            "Techie.",
            "Cyclist.",
            "Technophile.",
            "PowerLifter.",
            "Geek.",
            "Gamer.",
          ],
        }}/>
      </SectionTitleTwo>
      
      {/* <SectionText>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      <p>TEsting</p>
      </SectionText> */}
      {/* <Button onClick={()=>window.location='https://google.com'}>Learn More</Button> */}
    </LeftSection>
  </Section>
  </>

);

export default Hero;