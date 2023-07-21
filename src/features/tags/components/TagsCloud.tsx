import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { TagCloud } from 'react-tagcloud';
import { useGetAllTagsMutation } from '../store/items.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { ITag } from '../../../types/slices.types';
import { useTranslation } from 'react-i18next';
import { tagsCloudConfig } from '../configs/content.config';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../configs/routes.config';

export const TagsCloud: FC = () => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [tagsList, setTagsList] = useState<ITag[] | null>(null);

    const [getAllTags] = useGetAllTagsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const getItemsData = useCallback(async () => {
        try {
            resetApiError();
            const tags = await getAllTags({}).unwrap();
            setTagsList(tags);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getAllTags, handleBaseQueryError, resetApiError]);

    const handleRedirect = (data: { value: string }) => {
        if (tagsList) {
            const tag = tagsList.find((item) => item.value === data.value);
            navigate(AppRoutes.search);
        }
    };

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
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Typography textAlign="center" variant="h6">
                {t(tagsCloudConfig.title)}
            </Typography>
            <Divider flexItem />
            {tagsList && (
                <TagCloud
                    minSize={12}
                    maxSize={35}
                    tags={tagsList.map(({ value, itemTags }) => ({
                        value,
                        count: itemTags?.length,
                        props: {
                            style: {
                                cursor: 'pointer',
                            },
                        },
                    }))}
                    onClick={handleRedirect}
                    disableRandomColor
                />
            )}
        </Box>
    );
};
