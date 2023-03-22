import React, { useReducer, ChangeEvent } from "react";
import { initialState } from "../../Contexts/LogIn";
import Reducer from "../../Contexts/LogIn";
import { Stack, Box, Button } from "@mui/material";
import RememberMeSwitch from "./RememberMeSwitch";
import UsernameTextField from "./UsernameTextField";
import PasswordTextField from "./PasswordTextField";
import SignInButton from "./SignInButton";
import ForgotPasswordButton from "./ForgotPasswordButton";

const LogInForm = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const { username, password, showPassword, rememberMe } = state;

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    dispatch({
      type: "showPassword",
      payload: !showPassword,
    });
  };

  const handleChangeRememberMeSwitch = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    dispatch({
      type: "rememberMe",
      payload: event.target.checked,
    });
  };

  const handleClickLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
    //Prevent page reload
    e.preventDefault();
    console.log("sign in");
    console.log(username);
    console.log(password);
    console.log(rememberMe);
    //TODO backend
  };

  return (
    <Box maxWidth="md">
      <Stack spacing={5}>
        <form onSubmit={handleClickLogIn}>
          <Stack spacing={5}>
            <Box display="flex" align-items="center" justifyContent="center">
              <UsernameTextField
                updateUsername={handleUsernameChange}
                username={username}
              />
            </Box>
            <Box display="flex" align-items="center" justifyContent="center">
              <PasswordTextField
                updatePassword={handlePasswordChange}
                password={password}
                handleClickShowPassword={handleClickShowPassword}
                showPassword={showPassword}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <RememberMeSwitch
                updateRememberMeSwitch={handleChangeRememberMeSwitch}
                isRememberMeChecked={rememberMe}
              />
            </Box>
            <Box display="flex" justifyContent="center">
              <SignInButton/>
            </Box>
          </Stack>
        </form>
        <ForgotPasswordButton/>
      </Stack>
    </Box>
  );
};

export default LogInForm;