import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { TagCloud } from 'react-tagcloud';
import { useGetAllTagsMutation } from '../store/tags.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { ITag } from '../../../types/slices.types';
import { useTranslation } from 'react-i18next';
import { tagsCloudConfig } from '../configs/content.config';
import { useSearchByTag } from '../../search';

export const TagsCloud: FC = () => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [tagsList, setTagsList] = useState<ITag[] | null>(null);

    const [getAllTags] = useGetAllTagsMutation();

    const { openErrorNotification } = useNotificationsContext();

    const { handleSearchByTag } = useSearchByTag();

    const getItemsData = useCallback(async () => {
        try {
            resetApiError();
            const tags = await getAllTags({}).unwrap();
            setTagsList(tags);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getAllTags, handleBaseQueryError, resetApiError]);

    const handleSearch = async (data: { value: string }) => {
        const tag = tagsList?.filter((tag) => tag.value === data.value);
        if (tag) {
            await handleSearchByTag(tag[0].id);
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
                    onClick={handleSearch}
                    disableRandomColor
                />
            )}
        </Box>
    );
};
