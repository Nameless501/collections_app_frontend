import { FC } from 'react';
import { Alert, Box, Button } from '@mui/material';
import { ProfileFormWrapperPropsType } from '../types/common.types';

const ProfileFormWrapper: FC<ProfileFormWrapperPropsType> = ({
    handleSubmit,
    disabled,
    error,
    children,
}) => {
    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
                bgcolor: ({ palette }) => palette.background.default,
                width: '100%',
                maxWidth: '500px',
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 6,
                borderRadius: 2,
                px: { xs: 4, md: 8 },
                pb: 6,
                gap: 4,
            }}
        >
            {children}
            <Button
                variant="contained"
                sx={{ width: '50%', mt: 3 }}
                disabled={disabled}
                type="submit"
            >
                Update
            </Button>
            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    );
};

export default ProfileFormWrapper;
