import { FC, useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import { useGetAllCollectionsMutation } from '../store/collections.slice';
import { setUserCollections } from '../../../store/userCollections/userCollectionsSlice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import CollectionsList from './collectionList/CollectionsList';

export const AllCollections: FC = () => {
    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const dispatch = useTypedDispatch();

    const { collections } = useTypedSelector((state) => state.userCollections);

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const [getAllCollections, { isLoading, isError }] =
        useGetAllCollectionsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getCollectionsData = useCallback(async () => {
        try {
            resetApiError();
            const collections = await getAllCollections({}).unwrap();
            dispatch(setUserCollections(collections));
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getAllCollections, dispatch, handleBaseQueryError, resetApiError]);

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
                <CollectionsList
                    collections={collections}
                    isAdmin={currentUser.isAdmin}
                    userId={currentUser.id}
                />
            )}
            {isLoading && <Loader />}
        </Box>
    );
};
