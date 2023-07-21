import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { IFieldValue } from '../../../types/slices.types';
import {
    CheckboxFieldValues,
    FieldTypes,
} from '../../../configs/common.config';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const ItemField: FC<IFieldValue> = ({ field, value }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                width: '100%',
                alignItems: 'center',
            }}
        >
            <Typography variant="subtitle1" color="text.secondary">
                {`${field.label}:`}
            </Typography>
            {field.type === FieldTypes.boolean ? (
                <>
                    {value === CheckboxFieldValues.checked ? (
                        <CheckBoxIcon />
                    ) : (
                        <CheckBoxOutlineBlankIcon />
                    )}
                </>
            ) : (
                <Typography variant="subtitle1">{value}</Typography>
            )}
        </Box>
    );
};

export default ItemField;
