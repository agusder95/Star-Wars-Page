import { SectionWrapper } from "./styles";

function Section({children}) {
     return (
          <SectionWrapper>
               {children}
          </SectionWrapper>
     );
}

export default Section;