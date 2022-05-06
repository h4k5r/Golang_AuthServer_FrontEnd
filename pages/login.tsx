import {NextPage} from "next";
import {Box, Button, Card, CardContent, Container, Stack, TextField, Typography} from "@mui/material";
import * as React from "react";
import useInput from "../Hooks/UseInput";
import {ValidateEmail, ValidatePassword} from "../Utils/Utils";

const Login: NextPage = () => {
    const {
        isValid: isEmailValid,
        value: email,
        hasError: emailError,
        setValue: setEmail,
        onChange: onEmailChange,
        onBlur: onEmailBlur
    } = useInput(enteredValue => ValidateEmail(enteredValue))
    const {
        isValid: isPasswordValid,
        value: password,
        hasError: passwordError,
        setValue: setPassword,
        onChange: onPasswordChange,
        onBlur: onPasswordBlur
    } = useInput(enteredValue => ValidatePassword(enteredValue))
    return (
        <Box minHeight={"100vh"} display={"flex"} alignItems={"center"}>
            <Container maxWidth={'xs'} disableGutters>
                <Card>
                    <CardContent>
                        <Typography width={"inherit"} textAlign={"center"} marginBottom={2} variant={"h5"}
                                    fontWeight={"bolder"}>
                            Login
                        </Typography>
                        <Stack spacing={2}>
                            <TextField label="Email" variant="outlined" type={"email"} error={emailError}
                                       onChange={onEmailChange}
                                       onBlur={onEmailBlur}/>
                            <TextField label="Password" variant="outlined" type={"password"} error={passwordError}
                                       onChange={onPasswordChange}
                                       onBlur={onPasswordBlur}/>
                            <Button variant="contained" disabled={!(isEmailValid && isPasswordValid)}>Login</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}
export default Login