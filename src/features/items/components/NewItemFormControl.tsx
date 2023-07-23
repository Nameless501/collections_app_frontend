import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useTypedDispatch } from '../../../store/store';
import {
    useCreateItemMutation,
    useGetItemFieldsMutation,
} from '../store/items.slice';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { errorsConfig } from '../configs/api.config';
import { NewItemFormControlPropsType } from '../types/common.types';
import { IField, IFieldValue, IItem } from '../../../types/slices.types';
import { addCollectionItem } from '../../../store/collectionItems/collectionItemsSlice';
import NewItemForm from './NewItemForm';
import { newItemDefaultValues } from '../configs/forms.config';
import { FieldTypes } from '../../../configs/common.config';
import {
    getArraySchema,
    getObjectSchema,
} from '../../../utils/validation.util';
import {
    getFieldSchema,
    itemValidationSchema,
} from '../configs/validation.config';

const NewItemFormControl: FC<NewItemFormControlPropsType> = ({
    onSubmit,
    collectionId,
}) => {
    const dispatch = useTypedDispatch();

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const { openErrorNotification, openSuccessNotification } =
        useNotificationsContext();

    const [createItem, { isLoading }] = useCreateItemMutation();

    const [getFields] = useGetItemFieldsMutation();

    const [itemFields, setItemFields] = useState<IField[] | null>(null);

    const defaultFieldsValues = useMemo(() => {
        if (itemFields) {
            return {
                fields: itemFields.map(({ id, type }) => ({
                    fieldId: id,
                    value: type === FieldTypes.boolean ? false : '',
                })),
            };
        }
    }, [itemFields]);

    const getValidationSchema = (fields: IField[]) =>
        getObjectSchema({
            ...itemValidationSchema,
            fields: getArraySchema(
                ...fields.map(({ type }) => getFieldSchema(type))
            ),
        });

    const formatFieldsData = (fields: IFieldValue[]) =>
        fields.map(({ fieldId, value }) => ({ fieldId, value: `${value}` }));

    const saveItemData = (item: IItem) => {
        dispatch(addCollectionItem(item));
        onSubmit(item);
    };

    const handleCreateCollection: SubmitHandler<FieldValues> = async (body) => {
        try {
            resetApiError();
            body.fields = formatFieldsData(body.fields);
            const item = await createItem({ id: collectionId, body }).unwrap();
            saveItemData(item);
            openSuccessNotification();
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    const handleItemFields = useCallback(async () => {
        try {
            resetApiError();
            const fields = await getFields(collectionId).unwrap();
            setItemFields(fields);
        } catch (err) {
            handleBaseQueryError(err);
        }
    }, [collectionId, getFields, resetApiError, handleBaseQueryError]);

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    useEffect(() => {
        handleItemFields();
    }, [handleItemFields]);

    return (
        <>
            {itemFields && defaultFieldsValues && (
                <NewItemForm
                    onSubmit={handleCreateCollection}
                    fields={itemFields}
                    defaultValues={{
                        ...newItemDefaultValues,
                        ...defaultFieldsValues,
                    }}
                    disabled={isLoading}
                    validationSchema={getValidationSchema(itemFields)}
                />
            )}
        </>
    );
};

export default NewItemFormControl;
