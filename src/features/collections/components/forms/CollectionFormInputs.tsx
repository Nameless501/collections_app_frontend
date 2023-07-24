import { FC } from 'react';
import { FieldError } from 'react-hook-form';
import { collectionFormConfig } from '../../configs/form.config';
import FormInput from '../../../../components/FormInput';
import ControlledSelect from '../../../../components/ControlledSelect';
import {
    subjectSelectConfig,
    fileInputConfig,
} from '../../configs/form.config';
import { CollectionFormInputsPropsType } from '../../types/common.types';
import FileInput from '../inputs/FileInput';

const CollectionFormInputs: FC<CollectionFormInputsPropsType> = ({
    control,
    register,
    errors,
}) => {
    const getError = (input: string) => {
        if (input in errors) {
            return errors[input] as FieldError;
        }
    };

    return (
        <>
            <ControlledSelect
                multiple={false}
                config={subjectSelectConfig}
                control={control}
                size="medium"
            />
            {collectionFormConfig.map((input) => (
                <FormInput
                    key={input.name}
                    {...input}
                    register={register}
                    error={getError(input.name)}
                />
            ))}
            <FileInput control={control} config={fileInputConfig} />
        </>
    );
};

export default CollectionFormInputs;
