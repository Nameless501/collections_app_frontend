import { FC, useCallback, useEffect, useState } from 'react';
import { Box, Autocomplete, TextField } from '@mui/material';
import { useGetAllTagsMutation } from '../store/tags.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { ITag } from '../../../types/slices.types';
import { TagsInputPropsType } from '../types/common.types';
import { useTranslation } from 'react-i18next';
import { labelsConfig } from '../configs/content.config';

export const TagsInput: FC<TagsInputPropsType> = ({ handleTagsAdd }) => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [tagsList, setTagsList] = useState<ITag[]>([]);

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
                gap: 1,
            }}
        >
            <Autocomplete
                multiple
                freeSolo
                options={tagsList.map((tag) => tag.value)}
                onChange={(_evt, value) => handleTagsAdd(value as string[])}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={t(labelsConfig.tags)}
                        fullWidth
                    />
                )}
                sx={{ width: '100%' }}
            />
        </Box>
    );
};
