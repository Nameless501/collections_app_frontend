import { FC } from 'react';
import { Grid } from '@mui/material';
import { FieldsListShortPropsType } from '../types/common.types';
import ItemField from './ItemField';

const FieldsListShort: FC<FieldsListShortPropsType> = ({ fields }) => {
    return (
        <Grid item container justifyContent="space-between" wrap="wrap">
            {fields.map((field) => (
                <ItemField key={field.id} {...field} />
            ))}
        </Grid>
    );
};

export default FieldsListShort;
