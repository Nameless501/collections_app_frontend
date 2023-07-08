import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

const Loader: FC = () => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Loader;
