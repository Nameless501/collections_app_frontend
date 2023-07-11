import { FC, useState, useEffect, useCallback, useMemo } from 'react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import { useUpdateUserMutation } from '../store/profile.slice';
import ProfileFormWrapper from './ProfileFormWrapper';
import UserAvatar from '../../../components/UserAvatar';
import ProfileFormInputs from './ProfileFormInputs';
import { InputsType } from '../types/common.types';
import { handleFetchBaseQueryError } from '../../../utils/helpers.util';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import { profileValidationSchema } from '../configs/validation.config';
import { ProfileFormPropsType } from '../types/common.types';

export const ProfileForm: FC<ProfileFormPropsType> = ({
    user,
    handleStateUpdate,
}) => {
    const [apiError, setApiError] = useState<string>('');

    const [isChanged, setIsChanged] = useState<boolean>(false);

    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const defaultValues = useMemo<InputsType>(
        () => ({ name: user.name, email: user.email }),
        [user]
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        control,
        setValue,
    } = useForm<InputsType>(
        getHookFormConfig<InputsType>(profileValidationSchema, {})
    );

    const watch = useWatch({ control });

    const filterEmptyFields = useCallback(
        (data: InputsType) =>
            Object.entries(data).reduce<InputsType>((acc, [key, value]) => {
                if (value) {
                    acc[key as keyof InputsType] = value;
                }
                return acc;
            }, {} as InputsType),
        []
    );

    const filterDefaultValues = useCallback(
        (data: InputsType) =>
            Object.entries(data).reduce<InputsType>((acc, [key, value]) => {
                if (
                    typeof defaultValues === 'object' &&
                    defaultValues[key as keyof InputsType] !== value
                ) {
                    acc[key as keyof InputsType] = value;
                }
                return acc;
            }, {} as InputsType),
        [defaultValues]
    );

    const onSubmit: SubmitHandler<InputsType> = async (data): Promise<void> => {
        try {
            const updatedFields = filterDefaultValues(filterEmptyFields(data));
            await updateUser({ id: user.id, data: updatedFields }).unwrap();
            handleStateUpdate({ ...user, ...updatedFields });
        } catch (err) {
            handleFetchBaseQueryError(err, (msg) => setApiError(msg));
        }
    };

    useEffect(() => {
        const updatedFields = filterDefaultValues(filterEmptyFields(watch));
        const isDefault = Object.keys(updatedFields).length === 0;
        setIsChanged(!isDefault);
    }, [watch, filterDefaultValues, filterEmptyFields]);

    useEffect(() => {
        Object.entries(defaultValues).forEach(([key, value]) =>
            setValue(key as keyof InputsType, value)
        );
    }, [defaultValues, setValue]);

    return (
        <ProfileFormWrapper
            handleSubmit={handleSubmit(onSubmit)}
            disabled={!isValid || !isChanged || isLoading}
            error={apiError}
        >
            <Box sx={{ mt: -5 }}>
                <UserAvatar
                    name={user.name}
                    size={120}
                    fontSize={60}
                    isAdmin={user.isAdmin}
                />
            </Box>
            <Stack direction="column" gap={4} sx={{ width: '100%' }}>
                <ProfileFormInputs register={register} errors={errors} />
            </Stack>
        </ProfileFormWrapper>
    );
};
