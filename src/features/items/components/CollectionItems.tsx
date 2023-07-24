import { FC, useCallback, useEffect, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import { useGetCollectionItemsMutation } from '../store/items.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { ItemsList } from './ItemsList';
import { CollectionItemsPropsType } from '../types/common.types';
import { useTranslation } from 'react-i18next';
import { collectionItemsContentConfig } from '../configs/content.config';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import {
    deleteCollectionItem,
    setCollectionItems,
} from '../../../store/collectionItems/collectionItemsSlice';
import ItemsFilterForm from './ItemsFilterForm';
import {
    SortFormInputs,
    SortFormOptions,
    sortFormDefaultValue,
} from '../configs/forms.config';
import { SortDirections } from '../../../configs/common.config';
import useSort from '../../../hooks/useSort';
import { IItem } from '../../../types/slices.types';

export const CollectionItems: FC<CollectionItemsPropsType> = ({
    collectionId,
}) => {
    const { t } = useTranslation();

    const { control, setValue, watch } = useForm<FieldValues>({
        defaultValues: sortFormDefaultValue,
    });

    const sortDirection = watch(SortFormInputs.sortDirection);

    const sortedBy = watch(SortFormInputs.sortBy);

    const { handleSort } = useSort(sortDirection === SortDirections.ascending);

    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { items } = useTypedSelector((state) => state.collectionItems);

    const [getCollectionItems, { isLoading, isError }] =
        useGetCollectionItemsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const toggleSortDirection = (): void =>
        setValue(
            SortFormInputs.sortDirection,
            sortDirection === SortDirections.ascending
                ? SortDirections.descending
                : SortDirections.ascending
        );

    const sortItemsList = useCallback(
        (item1: IItem, item2: IItem) => {
            if (sortedBy === SortFormOptions.createdAt) {
                return handleSort(
                    Date.parse(item1.createdAt),
                    Date.parse(item2.createdAt)
                );
            }
            return handleSort(item1.title, item2.title);
        },
        [sortedBy, handleSort]
    );

    const sortedItems = useMemo(() => {
        return [...items].sort(sortItemsList);
    }, [sortItemsList, items]);

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
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            <Typography variant="h6" textAlign="center">
                {t(collectionItemsContentConfig.title)}
            </Typography>
            <ItemsFilterForm
                control={control}
                toggleSortDirection={toggleSortDirection}
                sortDirection={sortDirection}
            />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    {!isError && (
                        <ItemsList
                            items={sortedItems}
                            showDelete={true}
                            onSubmit={handleDeleteItem}
                        />
                    )}
                </>
            )}
        </Box>
    );
};
