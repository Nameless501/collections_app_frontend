import { FC } from 'react';
import { ProfileForm } from '../features/profile';
import { Box } from '@mui/material';

const ProfilePage: FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
        >
            <ProfileForm />
        </Box>
    );
};

export default ProfilePage;
