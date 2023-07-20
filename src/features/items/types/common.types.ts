import {
    UseFormRegister,
    FieldValues,
    FieldErrors,
    Control,
    SubmitHandler,
} from 'react-hook-form';
import {
    IField,
    IFieldValue,
    IItem,
    IItemWithFields,
} from '../../../types/slices.types';
import { ObjectSchema } from 'joi';

export type ItemCardPropsType = {
    item: IItem;
    fields: IFieldValue[];
};

export type FieldsListShortPropsType = {
    fields: IFieldValue[];
};

export type ItemsListPropsType = {
    items: IItemWithFields[];
};

export type CollectionItemsPropsType = {
    collectionId: number;
};

export type DeleteItemsButtonPropsType = {
    itemId: number;
    onSubmit?: (itemId: number) => void;
};

export type ItemDataCardPropsType = {
    itemId: number;
};

export type NewItemFormControlPropsType = {
    onSubmit: (item: IItem) => void;
    collectionId: number;
};

export type NewItemDialogPropsType = {
    collectionId: number;
};

export type FieldsInputsPropsType = {
    fields: IField[];
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    control: Control;
};

export type defaultFormValuesType = {
    title: string;
    tags: string[];
    fields: Array<{
        fieldId: number;
        value: string | boolean;
    }>;
};

export type NewItemFormPropsType = {
    onSubmit: SubmitHandler<FieldValues>;
    fields: IField[];
    disabled: boolean;
    defaultValues: defaultFormValuesType;
    validationSchema: ObjectSchema;
};
