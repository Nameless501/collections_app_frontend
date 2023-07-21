import { FC, useEffect } from 'react';
import { useDeleteCommentMutation } from '../store/comments.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { DeleteCommentButtonPropsType } from '../types/common.types';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import { tooltipsConfig } from '../configs/content.config';
import { useTranslation } from 'react-i18next';
import { useTypedDispatch } from '../../../store/store';
import { deleteItemComment } from '../../../store/itemComments/itemCommentsSlice';

export const DeleteCommentButton: FC<DeleteCommentButtonPropsType> = ({
    commentId,
}) => {
    const { t } = useTranslation();

    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [deleteComment, { isLoading }] = useDeleteCommentMutation();

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const handleItemDelete = async () => {
        try {
            resetApiError();
            await deleteComment(commentId).unwrap();
            dispatch(deleteItemComment(commentId));
            openSuccessNotification();
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <ButtonWithIcon
            icon={DeleteIcon}
            handleClick={handleItemDelete}
            tooltip={t(tooltipsConfig.delete)}
            disabled={isLoading}
        />
    );
};
