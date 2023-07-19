import { FC, useState, useEffect, useMemo } from 'react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import { useUpdateUserMutation } from '../store/profile.slice';
import ProfileFormWrapper from './ProfileFormWrapper';
import UserAvatar from '../../../components/UserAvatar';
import ProfileFormInputs from './ProfileFormInputs';
import { InputsType } from '../types/common.types';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import { profileValidationSchema } from '../configs/validation.config';
import { errorsConfig } from '../configs/common.config';
import { ProfileFormPropsType } from '../types/common.types';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import useFilterDefaultFieldValues from '../../../hooks/useFilterDefaultFieldValues';

export const ProfileForm: FC<ProfileFormPropsType> = ({
    user,
    handleStateUpdate,
}) => {
    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [isChanged, setIsChanged] = useState<boolean>(false);

    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const defaultValues = useMemo<InputsType>(
        () => ({ name: user?.name, email: user?.email }),
        [user]
    );

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

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

    const getUpdatedFields =
        useFilterDefaultFieldValues<InputsType>(defaultValues);

    const onSubmit: SubmitHandler<InputsType> = async (data): Promise<void> => {
        try {
            resetApiError();
            const updatedFields = getUpdatedFields(data);
            await updateUser({ id: user?.id, data: updatedFields }).unwrap();
            handleStateUpdate({ ...user, ...updatedFields });
            openSuccessNotification('Success');
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    useEffect(() => {
        const updatedFields = getUpdatedFields(watch);
        const isDefault = Object.keys(updatedFields).length === 0;
        setIsChanged(!isDefault);
    }, [watch, getUpdatedFields]);

    useEffect(() => {
        Object.entries(defaultValues).forEach(([key, value]) =>
            setValue(key as keyof InputsType, value)
        );
    }, [defaultValues, setValue]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <ProfileFormWrapper
            handleSubmit={handleSubmit(onSubmit)}
            disabled={!isValid || !isChanged || isLoading}
        >
            <Box sx={{ mt: -5 }}>
                <UserAvatar
                    name={user?.name}
                    size={120}
                    fontSize={60}
                    isAdmin={user?.isAdmin}
                />
            </Box>
            <Stack direction="column" gap={4} sx={{ width: '100%' }}>
                <ProfileFormInputs register={register} errors={errors} />
            </Stack>
        </ProfileFormWrapper>
    );
};
