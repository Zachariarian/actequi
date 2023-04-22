import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "../accountBox/common";
import { Marginer } from "../marginer";
import { AccountContext } from "../accountBox/accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToApply} = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="First Name" /> 
        <Input type="text" placeholder="Middle Name" />
        <Input type="text" placeholder="Surname" />
        <Input type="text" placeholder="ID Number" />
        <Input type="text" placeholder="Mobile Phone No" />
        <Input type="text" placeholder="Occupation" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={switchToApply}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}