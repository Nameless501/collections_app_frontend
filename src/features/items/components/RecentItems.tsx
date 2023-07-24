import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useGetRecentItemsMutation } from '../store/items.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { IItem } from '../../../types/slices.types';
import { useTranslation } from 'react-i18next';
import { ItemsList } from './ItemsList';
import { recentItemsContentConfig } from '../configs/content.config';

export const RecentItems: FC = () => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [itemsData, setItemsData] = useState<IItem[]>([]);

    const [getRecentItems, { isLoading, isError }] =
        useGetRecentItemsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getItemsData = useCallback(async () => {
        try {
            resetApiError();
            const items = await getRecentItems({}).unwrap();
            setItemsData(items);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getRecentItems, handleBaseQueryError, resetApiError]);

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
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Typography variant="h5" textAlign="center">
                {t(recentItemsContentConfig.title)}
            </Typography>
            {!isLoading && !isError && <ItemsList items={itemsData} />}
            {isLoading && <Loader />}
        </Box>
    );
};
