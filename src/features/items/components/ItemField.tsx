import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import { IFieldValue } from '../../../types/slices.types';
import {
    CheckboxFieldValues,
    FieldTypes,
} from '../../../configs/common.config';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Markdown from 'marked-react';
import DOMPurify from 'dompurify';

const ItemField: FC<IFieldValue> = ({ field, value }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                width: '100%',
                alignItems:
                    field.type === FieldTypes.text ? 'flex-stars' : 'center',
                flexDirection:
                    field.type === FieldTypes.text ? 'column' : 'row',
            }}
        >
            <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign={'left'}
            >
                {`${field.label}:`}
            </Typography>
            {field.type === FieldTypes.boolean && (
                <>
                    {value === CheckboxFieldValues.checked ? (
                        <CheckBoxIcon />
                    ) : (
                        <CheckBoxOutlineBlankIcon />
                    )}
                </>
            )}
            {field.type === FieldTypes.text && (
                <Markdown>{DOMPurify.sanitize(value)}</Markdown>
            )}
            {(field.type === FieldTypes.string ||
                field.type === FieldTypes.integer) && (
                <Typography variant="subtitle1">{value}</Typography>
            )}
        </Box>
    );
};

export default ItemField;
