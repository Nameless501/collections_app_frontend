import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormControlLabel, Checkbox } from '@mui/material';
import { CheckboxFormInputPropsType } from '../types/common.types';

const CheckboxFormInput: FC<CheckboxFormInputPropsType> = ({
    name,
    label,
    control,
}) => {
    return (
        <FormControlLabel
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field: props }) => (
                        <Checkbox
                            {...props}
                            checked={props.value}
                            onChange={(e) => props.onChange(e.target.checked)}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                },
                            }}
                        />
                    )}
                />
            }
            label={label}
            sx={{ width: 'fit-content', alignSelf: 'center' }}
        />
    );
};

export default CheckboxFormInput;
