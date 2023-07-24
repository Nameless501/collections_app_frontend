import { FC, useState, useEffect, useCallback } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { useGetUserDataMutation } from '../store/profile.slice';
import { updateUserData } from '../../../store/user/userSlice';
import { updateUsersData } from '../../../store/allUsers/allUsersSlice';
import { ProfileForm } from './ProfileForm';
import { UserProfilePropsType } from '../types/common.types';
import { IUser } from '../../../types/slices.types';
import Loader from '../../../components/Loader';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { errorsConfig } from '../configs/api.config';

export const UserProfile: FC<UserProfilePropsType> = ({ userId }) => {
    const [userData, setUserData] = useState<IUser>();

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const [getUserData] = useGetUserDataMutation();

    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification } = useNotificationsContext();

    const handleGetUserData = useCallback(async () => {
        try {
            resetApiError();
            const user = await getUserData(userId).unwrap();
            setUserData(user as IUser);
        } catch (err) {
            handleBaseQueryError(err);
            openErrorNotification(apiError);
        }
    }, [
        userId,
        getUserData,
        apiError,
        handleBaseQueryError,
        openErrorNotification,
        resetApiError,
    ]);

    const handleStateUpdate = (data: IUser) => {
        if (userId === currentUser.id) {
            dispatch(updateUserData(data));
        }
        dispatch(updateUsersData(data));
    };

    useEffect(() => {
        if (userId === currentUser.id) {
            setUserData(currentUser);
        } else {
            handleGetUserData();
        }
    }, [userId, currentUser, handleGetUserData]);

    return (
        <>
            {userData ? (
                <ProfileForm
                    user={userData}
                    handleStateUpdate={handleStateUpdate}
                />
            ) : (
                <Loader />
            )}
        </>
    );
};
