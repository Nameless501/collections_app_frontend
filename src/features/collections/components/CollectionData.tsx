import { FC, useCallback, useEffect, useState } from 'react';
import { useTypedSelector, useTypedDispatch } from '../../../store/store';
import {
    useGetCollectionDataMutation,
    useDeleteFieldMutation,
} from '../store/collections.slice';
import Loader from '../../../components/Loader';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import { ICollection, IField } from '../../../types/slices.types';
import { CollectionDataPropsType } from '../types/common.types';
import { CollectionDataCard } from './cards/CollectionDataCard';
import UpdateCollectionForm from './forms/UpdateCollectionForm';
import UpdateFieldForm from './forms/UpdateFieldForm';
import NewFieldsForm from './forms/NewFieldsForm';
import DialogFormWrapper from './forms/DialogFormWrapper';
import {
    addCollectionFields,
    deleteCollectionField,
    setCollectionData,
    updateCollectionField,
} from '../../../store/collectionData/collectionDataSlice';

export const CollectionData: FC<CollectionDataPropsType> = ({
    collectionId,
}) => {
    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [editCollectionIsOpen, setEditCollectionState] =
        useState<boolean>(false);

    const [editFieldIsOpen, setEditFieldState] = useState<boolean>(false);

    const [newFieldsIsOpen, setNewFieldsState] = useState<boolean>(false);

    const [editingField, setEditingField] = useState<IField | null>(null);

    const dispatch = useTypedDispatch();

    const { data: collectionData } = useTypedSelector(
        (state) => state.collectionData
    );

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const [getCollectionData, { isLoading }] = useGetCollectionDataMutation();

    const [deleteField] = useDeleteFieldMutation();

    const { openErrorNotification } = useNotificationsContext();

    const openFieldUpdateForm = (field: IField) => {
        setEditingField(field);
        setEditFieldState(true);
    };

    const closeFieldUpdateForm = () => {
        setEditingField(null);
        setEditFieldState(false);
    };

    const updateCollectionData = (newCollection: ICollection) => {
        dispatch(setCollectionData(newCollection));
        setEditCollectionState(false);
    };

    const updateFieldsData = (newField: IField) => {
        dispatch(updateCollectionField(newField));
        closeFieldUpdateForm();
    };

    const addFieldsData = (fields?: IField[]) => {
        if (fields) {
            dispatch(addCollectionFields(fields));
        }
        setNewFieldsState(false);
    };

    const handleFieldDelete = async (fieldId: number) => {
        try {
            resetApiError();
            await deleteField(fieldId).unwrap();
            dispatch(deleteCollectionField(fieldId));
            closeFieldUpdateForm();
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    const handleCollectionData = useCallback(async () => {
        try {
            resetApiError();
            const data = await getCollectionData(collectionId).unwrap();
            dispatch(setCollectionData(data));
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [
        getCollectionData,
        handleBaseQueryError,
        resetApiError,
        collectionId,
        dispatch,
    ]);

    useEffect(() => {
        handleCollectionData();
    }, [handleCollectionData]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <>
            {collectionData && (
                <CollectionDataCard
                    collection={collectionData}
                    isAdmin={currentUser.isAdmin}
                    isOwner={collectionData.userId === currentUser.id}
                    handleCollectionEdit={() => setEditCollectionState(true)}
                    handleFieldEdit={openFieldUpdateForm}
                    handleFieldDelete={handleFieldDelete}
                    openNewFieldsForm={() => setNewFieldsState(true)}
                />
            )}
            <DialogFormWrapper
                isOpen={editCollectionIsOpen}
                handleClose={() => setEditCollectionState(false)}
            >
                {collectionData && (
                    <UpdateCollectionForm
                        onSubmit={updateCollectionData}
                        collection={collectionData}
                    />
                )}
            </DialogFormWrapper>
            <DialogFormWrapper
                isOpen={editFieldIsOpen}
                handleClose={closeFieldUpdateForm}
            >
                {editingField && (
                    <UpdateFieldForm
                        onSubmit={updateFieldsData}
                        field={editingField}
                    />
                )}
            </DialogFormWrapper>
            <DialogFormWrapper
                isOpen={newFieldsIsOpen}
                handleClose={() => setNewFieldsState(false)}
            >
                {collectionData && (
                    <NewFieldsForm
                        onSubmit={addFieldsData}
                        collectionId={collectionData.id}
                    />
                )}
            </DialogFormWrapper>
            {isLoading && <Loader />}
        </>
    );
};
