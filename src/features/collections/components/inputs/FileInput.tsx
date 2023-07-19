import { FC } from 'react';
import {
    FormControl
} from '@mui/material';
import { Controller } from 'react-hook-form';
import { MuiFileInput } from "mui-file-input";
import { FileInputPropsType } from '../../types/common.types';
import { useTranslation } from 'react-i18next';

const FileInput: FC<FileInputPropsType> = ({
    config,
    control,
    size,
}) => {
    const { t } = useTranslation();
    
    return (
        <FormControl sx={{ width: '100%' }} size={size}>
            <Controller
                control={control}
                name={config.name}
                render={({ field, fieldState }) => {
                    return (
                        <MuiFileInput
                            {...field}
                            placeholder={t(config.label)}
                            error={fieldState.invalid}
                        />
                    );
                }}
            />
        </FormControl>
    );
};

export default FileInput;