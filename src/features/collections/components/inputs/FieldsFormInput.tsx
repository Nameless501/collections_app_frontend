import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import FormInput from '../../../../components/FormInput';
import ControlledSelect from '../../../../components/ControlledSelect';
import ButtonWithIcon from '../../../../components/ButtonWithIcon';
import {
    getFieldTypeSelectConfig,
    getFieldLabelInputConfig,
} from '../../configs/form.config';
import CloseIcon from '@mui/icons-material/Close';
import { FieldsFormInputPropsType } from '../../types/common.types';
import { FieldsFormInputs } from '../../configs/enums.config';

const FieldsFormInput: FC<FieldsFormInputPropsType> = ({
    register,
    control,
    remove,
    index,
    errors,
}) => {
    const getError = (key: string) => {
        if (Array.isArray(errors)) {
            const error = errors[index];
            if (typeof error === 'object' && key in error) {
                return error[key];
            }
        }
    };

    return (
        <Grid spacing={0.25} container wrap="wrap">
            <Grid item xs>
                <FormInput
                    register={register}
                    {...getFieldLabelInputConfig(index)}
                    error={getError(FieldsFormInputs.label)}
                />
            </Grid>
            <Grid item xs={3}>
                <ControlledSelect
                    multiple={false}
                    config={getFieldTypeSelectConfig(index)}
                    control={control}
                    size="medium"
                />
            </Grid>
            <Grid item xs="auto">
                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <ButtonWithIcon icon={CloseIcon} handleClick={remove} />
                </Box>
            </Grid>
        </Grid>
    );
};

export default FieldsFormInput;
