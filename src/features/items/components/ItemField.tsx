import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { IFieldValue } from '../../../types/slices.types';

const ItemField: FC<IFieldValue> = ({ field, value }) => {
    return (
        <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
            <Typography variant="subtitle1" color="text.secondary">
                {`${field.label}:`}
            </Typography>
            <Typography variant="subtitle1">{value}</Typography>
        </Box>
    );
};

export default ItemField;
