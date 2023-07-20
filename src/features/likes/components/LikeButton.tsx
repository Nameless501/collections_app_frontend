import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../../store/store';
import {
    useDeleteLikeMutation,
    useSetLikeMutation,
} from '../store/likes.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import { LikeButtonPropsType } from '../types/common.types';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Badge } from '@mui/material';

export const LikeButton: FC<LikeButtonPropsType> = ({ itemId, likes }) => {
    const { data: currentUser, isAuthorized } = useTypedSelector(
        (store) => store.user
    );

    const [likesCounter, setLikesCounter] = useState<number>(likes.length);

    const [isLiked, setIsLiked] = useState<boolean>(
        isAuthorized
            ? likes.some((like) => like.userId === currentUser.id)
            : false
    );

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [setLike, { isLoading: setLikeIsLoading }] = useSetLikeMutation();

    const [deleteLike, { isLoading: deleteLikeIsLoading }] =
        useDeleteLikeMutation();

    const { openErrorNotification } = useNotificationsContext();

    const handleLikeSet = async () => {
        try {
            resetApiError();
            await setLike(itemId).unwrap();
            setIsLiked(true);
            setLikesCounter((cur) => cur + 1);
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    const handleLikeDelete = async () => {
        try {
            resetApiError();
            await deleteLike(itemId).unwrap();
            setIsLiked(false);
            setLikesCounter((cur) => cur - 1);
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
        <Badge
            badgeContent={likesCounter}
            showZero
            color="primary"
            overlap="circular"
            sx={{ '& .MuiBadge-badge': { top: 11, right: 6 } }}
        >
            <ButtonWithIcon
                icon={isLiked ? FavoriteIcon : FavoriteBorderIcon}
                handleClick={isLiked ? handleLikeDelete : handleLikeSet}
                disabled={
                    !isAuthorized || setLikeIsLoading || deleteLikeIsLoading
                }
            />
        </Badge>
    );
};
