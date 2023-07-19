import { FC, useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { useGetUserCollectionsMutation } from '../store/collections.slice';
import { setUserCollections } from '../../../store/userCollections/userCollectionsSlice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import CollectionListWithFilters from './collectionList/CollectionListWithFilters';
import { UserCollectionsPropsType } from '../types/common.types';
import CustomFab from '../../../components/CustomFab';
import AddIcon from '@mui/icons-material/Add';
import NewCollectionAndFieldsForm from './forms/NewCollectionAndFieldsForm';
import DialogFormWrapper from './forms/DialogFormWrapper';

export const UserCollections: FC<UserCollectionsPropsType> = ({ userId }) => {
    const [formDialogIsOpen, setFormDialogState] = useState<boolean>(false);

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const dispatch = useTypedDispatch();

    const { collections } = useTypedSelector((state) => state.userCollections);

    const { data: currenUser } = useTypedSelector((state) => state.user);

    const [getUserCollections, { isLoading, isError }] =
        useGetUserCollectionsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getCollectionsData = useCallback(async () => {
        try {
            resetApiError();
            const collections = await getUserCollections(userId).unwrap();
            dispatch(setUserCollections(collections));
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [
        getUserCollections,
        userId,
        dispatch,
        handleBaseQueryError,
        resetApiError,
    ]);

    useEffect(() => {
        getCollectionsData();
    }, [getCollectionsData]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <Box
            sx={{
                py: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
            }}
        >
            {!isLoading && !isError && (
                <>
                    <CollectionListWithFilters
                        collections={collections}
                        userId={currenUser.id}
                        isAdmin={currenUser.isAdmin}
                    />
                    <CustomFab
                        color="primary"
                        sx={{
                            position: 'fixed',
                            bottom: 20,
                            alignSelf: 'flex-start',
                            transform: 'scale(1.1)',
                        }}
                        size="large"
                        icon={<AddIcon fontSize="large" />}
                        handleClick={() => setFormDialogState(true)}
                    />
                    <DialogFormWrapper
                        isOpen={formDialogIsOpen}
                        handleClose={() => setFormDialogState(false)}
                    >
                        <NewCollectionAndFieldsForm
                            handleClose={() => setFormDialogState(false)}
                        />
                    </DialogFormWrapper>
                </>
            )}
            {isLoading && <Loader />}
        </Box>
    );
};
