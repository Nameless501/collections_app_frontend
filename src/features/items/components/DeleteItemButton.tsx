import { FC, useEffect } from 'react';
import { useDeleteItemsMutation } from '../store/items.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { DeleteItemsButtonPropsType } from '../types/common.types';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import { tooltipsConfig } from '../configs/content.config';
import { useTranslation } from 'react-i18next';

export const DeleteItemsButton: FC<DeleteItemsButtonPropsType> = ({
    itemId,
    onSubmit,
}) => {
    const { t } = useTranslation();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [deleteItems, { isLoading }] = useDeleteItemsMutation();

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const handleItemDelete = async () => {
        try {
            resetApiError();
            await deleteItems([itemId]).unwrap();
            if (onSubmit) {
                onSubmit(itemId);
            }
            openSuccessNotification('Success');
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
