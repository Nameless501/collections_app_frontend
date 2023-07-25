import { FC, useState } from 'react';
import { Typography, Box } from '@mui/material';
import {
    CheckboxFieldValues,
    FieldTypes,
} from '../../../configs/common.config';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { ItemFieldPropsType } from '../types/common.types';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import EditIcon from '@mui/icons-material/Edit';
import DialogFormWrapper from '../../../components/DialogFormWrapper';
import UpdateFieldForm from './UpdateFieldForm';

const ItemField: FC<ItemFieldPropsType> = ({ field, value, id, isOwner = false }) => {
    const [formIsOpen, setFormState] = useState<boolean>(false);

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1,
                width: '100%',
                alignItems: 'center',
            }}
        >
            {isOwner && (
                <>
                    <ButtonWithIcon
                        icon={EditIcon}
                        handleClick={() => setFormState(true)}
                    />
                    <DialogFormWrapper
                        isOpen={formIsOpen}
                        handleClose={() => setFormState(false)}
                    >
                        <UpdateFieldForm
                            label={field.label}
                            id={id}
                            value={value}
                            type={field.type}
                            onSubmit={() => setFormState(false)}
                        />
                    </DialogFormWrapper>
                </>
            )}
            <Typography
                variant="subtitle1"
                color="text.secondary"
                textAlign={'left'}
            >
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
