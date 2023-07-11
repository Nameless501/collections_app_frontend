import { FC } from 'react';
import { Box, Stack, Button, Alert, Typography } from '@mui/material';
import { FormWrapperPropsType } from '../types/common.types';
import FormLink from './FormLink';

const SignFormWrapper: FC<FormWrapperPropsType> = ({
    children,
    handleSubmit,
    isValid,
    error,
    config,
}) => {
    return (
        <Stack
            spacing={4}
            bgcolor={({ palette }) => palette.background.default}
            sx={{
                px: 5,
                py: 4,
                alignItems: 'center',
                width: '90%',
                maxWidth: '500px',
                borderRadius: 2,
            }}
        >
            <Typography variant="h4">{config.title}</Typography>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ width: '100%' }}
            >
                <Stack spacing={3}>
                    {children}
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        disabled={!isValid}
                    >
                        Send
                    </Button>
                    {error && <Alert severity="error">{error}</Alert>}
                </Stack>
            </Box>
            <FormLink config={config.link} />
        </Stack>
    );
};

export default SignFormWrapper;
