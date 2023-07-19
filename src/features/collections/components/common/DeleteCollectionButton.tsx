import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTypedDispatch } from '../../../../store/store';
import useBaseQueryError from '../../../../hooks/useBaseQueryError';
import { useDeleteCollectionMutation } from '../../store/collections.slice';
import { deleteCollection } from '../../../../store/allCollections/allCollectionsSlice';
import { deleteUserCollection } from '../../../../store/userCollections/userCollectionsSlice';
import { DeleteCollectionButtonPropsType } from '../../types/common.types';
import { errorsConfig } from '../../configs/api.config';
import { useNotificationsContext } from '../../../../contexts/NotificationsContext';
import CustomFab from '../../../../components/CustomFab';
import { dataCardTooltipsConfig } from '../../configs/content.config';

const DeleteCollectionButton: FC<DeleteCollectionButtonPropsType> = ({ collectionId, size, sx, color, redirect }) => {
    const navigate = useNavigate();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const dispatch = useTypedDispatch();

    const [handleDelete] = useDeleteCollectionMutation();

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const deleteCollectionFromStore = () => {
        dispatch(deleteUserCollection(collectionId));
        dispatch(deleteCollection(collectionId));
    }

    const handleRedirect = () => {
        if(redirect) {
            navigate(redirect);
        }
    };

    const handleCollectionDelete = async () => {
        try {
            resetApiError();
            await handleDelete(collectionId).unwrap();
            deleteCollectionFromStore();
            handleRedirect();
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
        <CustomFab
            size={size}
            sx={sx}
            handleClick={handleCollectionDelete}
            color={color}
            icon={<DeleteIcon fontSize={size} color={color ? 'inherit' : "error"} />}
            tooltip={dataCardTooltipsConfig.deleteCollection}
        />
    );
};

export default DeleteCollectionButton;
