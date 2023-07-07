import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Stack, Typography, Link } from '@mui/material';
import { SignPageWrapperPropsType } from '../types/props.types';
import { signPageConfig } from '../configs/signPage.config';

const SignFormWrapper: FC<SignPageWrapperPropsType> = ({ children, type }) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
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
                <Typography variant="h4">
                    {signPageConfig[type].title}
                </Typography>
                {children}
                <Typography color="text.secondary" variant="body2">
                    {signPageConfig[type].link.text}
                    &nbsp;
                    <Link
                        component={RouterLink}
                        to={signPageConfig[type].link.route}
                        underline="hover"
                        variant="subtitle2"
                    >
                        {signPageConfig[type].link.name}
                    </Link>
                </Typography>
            </Stack>
        </Box>
    );
};

export default SignFormWrapper;
