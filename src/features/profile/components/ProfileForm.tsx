import { FC, useState, useEffect, useCallback } from 'react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { Box, Stack } from '@mui/material';
import { useTypedSelector, useTypedDispatch } from '../../../store/store';
import { useUpdateUserMutation } from '../store/profile.slice';
import ProfileFormWrapper from './ProfileFormWrapper';
import UserAvatar from '../../../components/UserAvatar';
import ProfileFormInputs from './ProfileFormInputs';
import { InputsType } from '../types/common.types';
import { getHookFormConfig } from '../configs/hookForm.cong';
import { handleFetchBaseQueryError } from '../../../utils/helpers.util';
import { updateUserData } from '../../../store/user/userSlice';

export const ProfileForm: FC = () => {
    const [apiError, setApiError] = useState<string>('');

    const [isChanged, setIsChanged] = useState<boolean>(false);

    const dispatch = useTypedDispatch();

    const [updateUser, { isLoading }] = useUpdateUserMutation();

    const {
        data: { name, email, isAdmin, id },
    } = useTypedSelector((state) => state.user);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid, defaultValues },
        control,
    } = useForm<InputsType>(getHookFormConfig({ name, email }));

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
            await updateUser({ id, data: updatedFields }).unwrap();
            dispatch(updateUserData(updatedFields));
        } catch (err) {
            handleFetchBaseQueryError(err, (msg) => setApiError(msg));
        }
    };

    useEffect(() => {
        const updatedFields = filterDefaultValues(filterEmptyFields(watch));
        const isDefault = Object.keys(updatedFields).length === 0;
        setIsChanged(!isDefault);
    }, [watch, filterDefaultValues, filterEmptyFields]);

    return (
        <ProfileFormWrapper
            handleSubmit={handleSubmit(onSubmit)}
            disabled={!isValid || !isChanged || isLoading}
            error={apiError}
        >
            <Box sx={{ mt: -5 }}>
                <UserAvatar
                    name={name}
                    size={120}
                    fontSize={60}
                    isAdmin={isAdmin}
                />
            </Box>
            <Stack direction="column" gap={4} sx={{ width: '100%' }}>
                <ProfileFormInputs register={register} errors={errors} />
            </Stack>
        </ProfileFormWrapper>
    );
};
