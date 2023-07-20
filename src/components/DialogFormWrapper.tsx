import { FC } from 'react';
import { Box, Dialog } from '@mui/material';
import { DialogFormWrapperPropsType } from '../types/props.types';

const DialogFormWrapper: FC<DialogFormWrapperPropsType> = ({
    children,
    isOpen,
    handleClose,
}) => {
    return (
        <Dialog
            fullWidth={true}
            maxWidth="sm"
            open={isOpen}
            onClose={handleClose}
        >
            <Box sx={{ p: { xs: 1, sm: 2, md: 3 } }}>{children}</Box>
        </Dialog>
    );
};

export default DialogFormWrapper;
