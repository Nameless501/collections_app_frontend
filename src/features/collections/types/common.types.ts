import {
    UseFormRegister,
    FieldError,
    Control,
    FieldValues,
    FieldErrors,
} from 'react-hook-form';
import { ICollection, IField } from '../../../types/slices.types';
import { SortDirections } from '../../../configs/common.config';
import {
    SortOptions,
    SortFormInputs,
    FieldsFormInputs,
} from '../configs/enums.config';
import { ChildrenPropsType } from '../../../types/props.types';
import { CollectionFormInputs } from '../configs/enums.config';
import { CollectionSubjects } from '../../../configs/common.config';
import { SxProps } from '@mui/material';
import { AppRoutes } from '../../../configs/routes.config';

export type CollectionCardImagePropsType = {
    image: string | null;
};

export type UserCollectionsPropsType = {
    userId: number;
};

export type CollectionListWithFiltersPropsType = {
    collections: Array<ICollection>;
    userId: number;
    isAdmin: boolean;
};

export type CollectionCardPropsType = {
    isOwner: boolean;
} & ICollection;

export type AllCollectionsListPropsType = {
    collections: Array<ICollection>;
    userId: number;
    isAdmin: boolean;
};

export type SortSelectPropsType = {
    control: Control;
    sortDirection: SortDirections;
    toggleSortDirection: () => void;
};

export type SortFormInputsType = {
    [SortFormInputs.sortBy]: SortOptions;
    [SortFormInputs.sortDirection]: SortDirections;
    [SortFormInputs.subject]: Array<CollectionSubjects>;
};

export type DeleteCollectionButtonPropsType = {
    collectionId: number;
    redirect?: AppRoutes;
    sx?: SxProps;
    size?: 'small' | 'medium' | 'large';
    color?:
        | 'default'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'info'
        | 'warning'
        | 'error';
};

export type CollectionFormInputsType = {
    [CollectionFormInputs.title]: string;
    [CollectionFormInputs.description]: string;
    [CollectionFormInputs.subject]: CollectionSubjects;
    [CollectionFormInputs.file]: File;
};

export type FieldsFormInputsType = {
    fields: Array<{
        [FieldsFormInputs.label]: string;
        [FieldsFormInputs.type]: string;
    }>;
};

export type FileInputConfigType = {
    name: string;
    label: string;
    id: string;
};

export type FileInputPropsType = {
    control: Control;
    size?: 'small' | 'medium';
    config: FileInputConfigType;
};

export type CollectionFormInputsPropsType = {
    control: Control;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
};

export type NewCollectionFormPropsType = {
    onSubmit: (collection: ICollection) => void;
    userId: number;
};

export type UpdateCollectionFormPropsType = {
    onSubmit: (collection: ICollection) => void;
    collection: ICollection;
};

export type UpdateFieldFormPropsType = {
    onSubmit: (field: IField) => void;
    field: IField;
};

export type NewFieldsFormPropsType = {
    onSubmit: (fields?: IField[]) => void;
    collectionId: number;
};

export type FieldsFormInputPropsType = {
    control: Control;
    register: UseFormRegister<FieldValues>;
    remove: () => void;
    index: number;
    errors?: FieldError;
};

export type CollectionDataPropsType = {
    collectionId: number;
    setOwner: (value: boolean) => void;
};

export type CollectionInfoPropsType = {
    collection: ICollection;
    isOwner: boolean;
};

export type CollectionFieldsTablePropsType = {
    fields: Array<IField>;
    isEditable: boolean;
    handleEdit: (field: IField) => void;
    handleDelete: (id: number) => void;
    openNewFieldsForm: () => void;
};

export type CollectionDataCardPropsType = {
    collection: ICollection;
    isOwner: boolean;
    isAdmin: boolean;
    handleCollectionEdit: () => void;
    handleFieldEdit: (field: IField) => void;
    handleFieldDelete: (id: number) => void;
    openNewFieldsForm: () => void;
};

export type CollectionInfoControlWrapperPropsType = {
    collectionId: number;
    isEditable: boolean;
    handleEdit: () => void;
} & ChildrenPropsType;

export type NewCollectionAndFieldsFormPropsType = {
    handleClose: () => void;
    userId: number;
};
