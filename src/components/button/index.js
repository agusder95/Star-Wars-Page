import { ButtonWrapper } from "./styles";

function Button({action, text}) {
     return (
          <ButtonWrapper onClick={action}> {text} </ButtonWrapper>
     );
}

export default Button;