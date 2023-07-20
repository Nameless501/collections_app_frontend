import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Divider } from '@mui/material';
import { useGetItemDataMutation } from '../store/items.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { IItemWithFields } from '../../../types/slices.types';
import { ItemDataCardPropsType } from '../types/common.types';
import ItemInfo from './ItemInfo';
import ItemField from './ItemField';

export const ItemDataCard: FC<ItemDataCardPropsType> = ({ itemId }) => {
    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [itemData, setItemData] = useState<IItemWithFields | null>(null);

    const [getItemData, { isLoading, isError }] = useGetItemDataMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getItemsData = useCallback(async () => {
        try {
            resetApiError();
            const data = await getItemData(itemId).unwrap();
            setItemData(data);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getItemData, handleBaseQueryError, resetApiError, itemId]);

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
            {!isLoading && !isError && (
                <Card
                    elevation={3}
                    sx={{
                        width: '100%',
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <Grid container gap={2}>
                        {itemData && <ItemInfo {...itemData.item} />}
                    </Grid>
                    <Divider />
                    <Grid item container gap={2}>
                        <Grid item xs={12}>
                            <Typography textAlign={'center'} variant="h6">
                                Item fields:
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {itemData &&
                                itemData.fields.map((field) => (
                                    <ItemField key={field.id} {...field} />
                                ))}
                        </Grid>
                    </Grid>
                </Card>
            )}
            {isLoading && <Loader />}
        </Box>
    );
};