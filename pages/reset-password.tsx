import {NextPage} from "next";
import {Box, Button, Card, CardContent, Container, Stack, TextField, Typography} from "@mui/material";
import * as React from "react";
import useInput from "../Hooks/UseInput";
import {ValidateEmail} from "../Utils/Utils";

const ResetPassword: NextPage = () => {
    const {
        isValid: isEmailValid,
        value: email,
        hasError: emailError,
        setValue: setEmail,
        onChange: onEmailChange,
        onBlur: onEmailBlur
    } = useInput(enteredValue => ValidateEmail(enteredValue))
    return (
        <Box minHeight={"100vh"} display={"flex"} alignItems={"center"}>
            <Container maxWidth={'xs'} disableGutters>
                <Card>
                    <CardContent>
                        <Typography width={"inherit"} textAlign={"center"} marginBottom={2} variant={"h5"}
                                    fontWeight={"bolder"}>
                            Reset Password
                        </Typography>
                        <Stack spacing={2}>
                            <TextField label="Email" variant="outlined" type={"email"} onChange={onEmailChange}
                                       error={emailError}
                                       onBlur={onEmailBlur}/>
                            <Button variant="contained" disabled={!isEmailValid}>Reset</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}
export default ResetPassword