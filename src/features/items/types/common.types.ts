import {
    UseFormRegister,
    FieldValues,
    FieldErrors,
    Control,
    SubmitHandler,
} from 'react-hook-form';
import { IField, IFieldValue, IItem } from '../../../types/slices.types';
import { ObjectSchema } from 'joi';
import { FieldTypes, SortDirections } from '../../../configs/common.config';

export type ItemCardPropsType = {
    item: IItem;
    showDelete?: boolean;
    onSubmit?: (itemId: number) => void;
};

export type FieldsListShortPropsType = {
    fields: IFieldValue[];
};

export type ItemsListPropsType = {
    items: IItem[];
    showDelete?: boolean;
    onSubmit?: (itemId: number) => void;
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

export type CheckboxFormInputPropsType = {
    control: Control;
    label: string;
    name: string;
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

export type ItemsFilterFormPropsType = {
    control: Control;
    toggleSortDirection: () => void;
    sortDirection: SortDirections;
};

export type ItemFieldPropsType = IFieldValue & {
    isOwner?: boolean;
};

export type UpdateFieldFormPropsType = {
    onSubmit: () => void;
    value: string;
    id: number;
    label: string;
    type: FieldTypes;
};
