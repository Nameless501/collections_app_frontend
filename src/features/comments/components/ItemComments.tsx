import { FC, useCallback, useEffect } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import {
    useGetItemCommentsMutation,
    useLeaveCommentMutation,
} from '../store/comments.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { useTranslation } from 'react-i18next';
import { itemCommentsConfig } from '../configs/content.config';
import { ItemCommentsPropsType } from '../types/common.types';
import { useTypedDispatch, useTypedSelector } from '../../../store/store';
import {
    addItemComment,
    setItemComments,
} from '../../../store/itemComments/itemCommentsSlice';
import CommentsList from './CommentsList';
import Loader from '../../../components/Loader';
import NewCommentForm from './NewCommentForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';

export const ItemComments: FC<ItemCommentsPropsType> = ({ itemId }) => {
    const { t } = useTranslation();

    const dispatch = useTypedDispatch();

    const { isAuthorized } = useTypedSelector((state) => state.user);

    const { comments } = useTypedSelector((state) => state.itemComments);

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [getComments, { isLoading }] = useGetItemCommentsMutation();

    const [createComment] = useLeaveCommentMutation();

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const handleCommentLeave: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetApiError();
            const newComment = await createComment({
                itemId,
                body: data,
            }).unwrap();
            dispatch(addItemComment(newComment));
            openSuccessNotification('Success');
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    const getItemsComments = useCallback(async () => {
        try {
            resetApiError();
            const comments = await getComments(itemId).unwrap();
            dispatch(setItemComments(comments));
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [getComments, handleBaseQueryError, resetApiError, itemId, dispatch]);

    useEffect(() => {
        getItemsComments();
    }, [getItemsComments]);

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
                {t(itemCommentsConfig.title)}
            </Typography>
            <Divider flexItem />
            {isLoading ? <Loader /> : <CommentsList comments={comments} />}
            {isAuthorized && <NewCommentForm onSubmit={handleCommentLeave} />}
        </Box>
    );
};
