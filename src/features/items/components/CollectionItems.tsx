import { FC, useCallback, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useGetCollectionItemsMutation } from '../store/items.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import ItemsList from './ItemsList';
import { CollectionItemsPropsType } from '../types/common.types';
import { useTranslation } from 'react-i18next';
import { collectionItemsContentConfig } from '../configs/content.config';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import {
    deleteCollectionItem,
    setCollectionItems,
} from '../../../store/collectionItems/collectionItemsSlice';

export const CollectionItems: FC<CollectionItemsPropsType> = ({
    collectionId,
}) => {
    const { t } = useTranslation();

    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { items } = useTypedSelector((state) => state.collectionItems);

    const [getCollectionItems, { isLoading, isError }] =
        useGetCollectionItemsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const handleDeleteItem = (itemId: number) =>
        dispatch(deleteCollectionItem(itemId));

    const getItemsData = useCallback(async () => {
        try {
            resetApiError();
            const items = await getCollectionItems(collectionId).unwrap();
            dispatch(setCollectionItems(items));
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [
        getCollectionItems,
        handleBaseQueryError,
        resetApiError,
        collectionId,
        dispatch,
    ]);

    useEffect(() => {
        getItemsData();
    }, [getItemsData]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <Box sx={{ width: '100%' }}>
            <Typography variant="h6" textAlign="center">
                {t(collectionItemsContentConfig.title)}
            </Typography>
            {!isLoading && !isError && (
                <ItemsList
                    items={items}
                    showDelete={true}
                    onSubmit={handleDeleteItem}
                />
            )}
            {isLoading && <Loader />}
        </Box>
    );
};
