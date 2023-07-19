import { FC } from 'react';
import { Box } from '@mui/material';
import { FlexCenterPropsType } from '../types/props.types';

const FlexCenterWrapper: FC<FlexCenterPropsType> = ({
    align = 'center',
    children,
}) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems={align}
            sx={{ width: '100%' }}
        >
            {children}
        </Box>
    );
};

export default FlexCenterWrapper;
