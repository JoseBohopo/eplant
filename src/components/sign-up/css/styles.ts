import styled from "styled-components";

export const StyledFormGroup = styled.div``;

export const StyledFormControl = styled.input`
  border-radius: 0px;
  height: 40px;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  heigh: 100%;
`;

export const StyledAuthButton = styled.button`
  padding: 0px;
  line-height: 40px;
  font-size: 16px;
  width: 250px;
  height: 45px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  :hover {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }
`;
