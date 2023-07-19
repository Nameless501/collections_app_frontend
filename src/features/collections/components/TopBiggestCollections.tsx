import { FC, useCallback, useEffect, useState } from 'react';
import { Box, ListItem, List, Typography } from '@mui/material';
import { useTypedSelector } from '../../../store/store';
import { useGetTopCollectionsMutation } from '../store/collections.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import CollectionCard from './cards/CollectionCard';
import { ICollection } from '../../../types/slices.types';
import { useTranslation } from 'react-i18next';
import { topCollectionsConfig } from '../configs/content.config';

export const TopBiggestCollections: FC = () => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [collections, setCollections] = useState<ICollection[]>([]);

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const [getTopCollections, { isLoading, isError }] =
        useGetTopCollectionsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getCollectionsData = useCallback(async () => {
        try {
            resetApiError();
            const collections = await getTopCollections({}).unwrap();
            setCollections(collections);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getTopCollections, handleBaseQueryError, resetApiError]);

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
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Typography variant="h5" textAlign="center">
                {t(topCollectionsConfig.title)}
            </Typography>
            {!isLoading && !isError && (
                <List>
                    {collections.map((collection) => (
                        <ListItem key={collection.id}>
                            <CollectionCard
                                {...collection}
                                isOwner={collection.userId === currentUser.id}
                            />
                        </ListItem>
                    ))}
                </List>
            )}
            {isLoading && <Loader />}
        </Box>
    );
};
