import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Card, Grid, Typography, Divider } from '@mui/material';
import { useGetItemDataMutation } from '../store/items.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { IItem } from '../../../types/slices.types';
import { ItemDataCardPropsType } from '../types/common.types';
import ItemInfo from './ItemInfo';
import ItemField from './ItemField';
import { LikeButton } from '../../likes/components/LikeButton';
import { DeleteItemsButton } from './DeleteItemButton';
import { useTypedSelector } from '../../../store/store';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../configs/routes.config';
import { setRouteParam } from '../../../utils/helpers.util';
import { useTranslation } from 'react-i18next';
import { itemFieldsContentConfig } from '../configs/content.config';

export const ItemDataCard: FC<ItemDataCardPropsType> = ({ itemId }) => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const navigate = useNavigate();

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const [itemData, setItemData] = useState<IItem | null>(null);

    const [getItemData, { isLoading, isError }] = useGetItemDataMutation();

    const { openErrorNotification } = useNotificationsContext();

    const isOwner =
        itemData?.collection.userId === currentUser.id || currentUser.isAdmin;

    const handleRedirect = () => {
        if (itemData?.collection) {
            navigate(
                setRouteParam(AppRoutes.collectionData, itemData?.collection.id)
            );
        } else {
            navigate(AppRoutes.allCollections);
        }
    };

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
                    <Grid container justifyContent="space-around">
                        {itemData && (
                            <>
                                <LikeButton
                                    itemId={itemId}
                                    likes={itemData.likes ? itemData.likes : []}
                                />
                                {isOwner && (
                                    <DeleteItemsButton
                                        itemId={itemId}
                                        onSubmit={handleRedirect}
                                    />
                                )}
                            </>
                        )}
                    </Grid>
                    <Grid container gap={2}>
                        {itemData && <ItemInfo {...itemData} />}
                    </Grid>
                    <Divider />
                    <Grid item container gap={2}>
                        <Grid item xs={12}>
                            <Typography textAlign={'center'} variant="h6">
                                {t(itemFieldsContentConfig.title)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {itemData?.fields &&
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
