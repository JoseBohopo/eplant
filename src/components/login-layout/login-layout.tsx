import {
  LeftContainer,
  LoginContainer,
  LoginInputUsername,
  RightContainer,
  StyledFornm,
} from "./css";

export default function LoginLayout(): any {
  return (
    <LoginContainer>
      <LeftContainer>
        <titleCo>
          {" "}
          <h3>Title</h3> <p>Subtitle</p>{" "}
        </>

        <StyledFornm>
          <LoginInputUsername placeholder="Email" type="text" />{" "}
          <LoginInputUsername placeholder="Password" type="password" />
        </StyledFornm>
      </LeftContainer>
      <RightContainer>hola</RightContainer>
    </LoginContainer>
  );
}
