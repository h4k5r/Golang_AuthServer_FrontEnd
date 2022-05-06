import type {NextPage} from 'next'
import {Box, Button, Card, CardContent, Container, Stack, Typography} from "@mui/material";

import * as React from 'react';
import {useRouter} from "next/router";
import {Routes} from "../Constants/Routes";


const Home: NextPage = () => {
    const router = useRouter()
    return (
        <Box minHeight={"100vh"} display={"flex"} alignItems={"center"}>
            <Container maxWidth={'xs'} disableGutters>
                <Card>
                    <CardContent>
                        <Typography width={"inherit"} textAlign={"center"} marginBottom={2} variant={"h5"}
                                    fontWeight={"bolder"}>
                            JWT Auth Server
                        </Typography>
                        <Stack spacing={2}>
                            <Button variant="contained" onClick={(e) => {
                                router.push(Routes.register)
                            }}>Register</Button>
                            <Button variant="contained" onClick={(e) => {
                                router.push(Routes.login)
                            }}>Login</Button>
                            <Button variant="contained" onClick={(e) => {
                                router.push(Routes.reset_password)
                            }}>Reset Password</Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    )
}

export default Home
