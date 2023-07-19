import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useGetCollectionItemsMutation } from '../store/items.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { IItemWithFields } from '../../../types/slices.types';
import ItemsList from './ItemsList';
import { CollectionItemsPropsType } from '../types/common.types';
import { useTranslation } from 'react-i18next';
import { collectionItemsContentConfig } from '../configs/content.config';

export const CollectionItems: FC<CollectionItemsPropsType> = ({ collectionId }) => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [itemsData, setItemsData] = useState<IItemWithFields[]>([]);

    const [getCollectionItems, { isLoading, isError }] =
    useGetCollectionItemsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getItemsData = useCallback(async () => {
        try {
            resetApiError();
            const items = await getCollectionItems(collectionId).unwrap();
            setItemsData(items);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getCollectionItems, handleBaseQueryError, resetApiError, collectionId]);

    useEffect(() => {
        getItemsData();
    }, [getItemsData]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <Box
            sx={{ width: '100%' }}
        >
            <Typography variant='h6' textAlign='center'>
                {t(collectionItemsContentConfig.title)}
            </Typography>
            {
                (!isLoading && !isError) && 
                <ItemsList items={itemsData} />
            }
            {isLoading && <Loader />}
        </Box>
    );
};