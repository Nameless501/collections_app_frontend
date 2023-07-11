import { FC } from 'react';
import { Box } from '@mui/material';
import { ChildrenPropsType } from '../types/props.types';

const FlexCenterWrapper: FC<ChildrenPropsType> = ({ children }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ width: '100%' }}
        >
            {children}
        </Box>
    );
};

export default FlexCenterWrapper;
