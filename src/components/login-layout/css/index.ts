import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 50%;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  background: red;
`;

export const LeftContainer = styled(Container)`
  background: white;
heigh: 100%
  margin: auto;
`;
export const RightContainer = styled(Container)`
  background: blue;
`;

export const LoginInputUsername = styled.input`
  border: 0;
  border-bottom: 2px solid #333;
  padding: 15px 0;
  display: block;
  font-size: 18px;
  font-family: "Muli", sans-serif;
  width: 100%;
  transition: 0.1s ease-in;

  &:focus:valid {
    border-bottom-color: green;
    outline: none;
  }
  &label:focus:valid {
    transform: translateY(-30px);
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  font-size: 18px;
  min-width: 5px;
  transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const StyledFornm = styled.form`
  width: 50%;
  max-width: 400px;
`;

export const titleContainer = styled.section`
  gap: 3rem;
`;
