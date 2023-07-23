import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import {
    useGetAllUsersMutation,
    useDeleteUsersMutation,
    useUpdateUsersRoleMutation,
} from '../store/adminPanel.slice';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import {
    setAllUsersData,
    deleteUsersData,
    updateUsersRoleData,
} from '../../../store/allUsers/allUsersSlice';
import { updateUserData } from '../../../store/user/userSlice';
import { useAuthorizationContext } from '../../authorization';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import UsersTableData from './UsersTableData';
import UsersTableControls from './UsersTableControls';
import Loader from '../../../components/Loader';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { errorsConfig } from '../configs/api.config';

export const AdminPanel: FC = () => {
    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const dispatch = useTypedDispatch();

    const [selected, setSelected] = useState<number[]>([]);

    const { users } = useTypedSelector((state) => state.allUsers);

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const [getAllUsers, { isLoading, isError }] = useGetAllUsersMutation();

    const [deleteUsers] = useDeleteUsersMutation();

    const [updateUsersRole] = useUpdateUsersRoleMutation();

    const { handleSignOut } = useAuthorizationContext();

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const getUsersData = useCallback(async () => {
        try {
            const users = await getAllUsers({}).unwrap();
            dispatch(setAllUsersData(users));
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getAllUsers, dispatch, handleBaseQueryError]);

    const toggleUserSelect = (id: number): void =>
        setSelected((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );

    const toggleAllUsersSelect = (): void =>
        setSelected((current) =>
            current.length < users.length
                ? users.map((user) => user.id as number)
                : []
        );

    const updateCurrentUserRole = (isAdmin: boolean) => {
        if (selected.includes(currentUser.id)) {
            dispatch(updateUserData({ ...currentUser, isAdmin }));
        }
    };

    const checkIsCurrentUserDeleted = () => {
        if (selected.includes(currentUser.id)) {
            handleSignOut();
        }
    };

    const showMessageAndClear = () => {
        setSelected([]);
        openSuccessNotification();
    };

    const toggleUsersAdminRole = async (isAdmin: boolean): Promise<void> => {
        try {
            resetApiError();
            await updateUsersRole({ id: selected, isAdmin }).unwrap();
            dispatch(updateUsersRoleData({ users: selected, isAdmin }));
            updateCurrentUserRole(isAdmin);
            showMessageAndClear();
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    const handleUsersDelete = async (): Promise<void> => {
        try {
            resetApiError();
            await deleteUsers(selected).unwrap();
            dispatch(deleteUsersData(selected));
            checkIsCurrentUserDeleted();
            showMessageAndClear();
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    useEffect(() => {
        getUsersData();
    }, [getUsersData]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <Box
            sx={{
                px: { lg: 5 },
                py: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >
            {!isLoading && !isError && (
                <Paper>
                    <UsersTableControls
                        selectedCount={selected.length}
                        handleDelete={handleUsersDelete}
                        toggleUsersAdminRole={toggleUsersAdminRole}
                    />
                    <UsersTableData
                        usersList={users}
                        selectedUsers={selected}
                        toggleUserSelect={toggleUserSelect}
                        toggleAllUsersSelect={toggleAllUsersSelect}
                    />
                </Paper>
            )}
            {isLoading && <Loader />}
        </Box>
    );
};
