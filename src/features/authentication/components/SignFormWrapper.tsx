import { FC } from "react";
import { Box, Stack, Button, Alert } from "@mui/material";
import { FormWrapperPropsType } from "../types/common.types";

const SignFormWrapper: FC<FormWrapperPropsType> = ({ children, handleSubmit, isValid, error }) => {
    return (
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ width: '100%' }}>
            <Stack spacing={3}>
                { children }
                <Button variant="contained" size='large' type="submit" disabled={!isValid}>
                    Send
                </Button>
                {
                    error && 
                    <Alert severity="error">
                        {error}
                    </Alert>
                }
            </Stack>
        </Box>
    );
}

export default SignFormWrapper;