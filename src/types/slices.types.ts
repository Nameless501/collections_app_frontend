import { CollectionSubjects, FieldTypes } from "../configs/common.config";

export interface IUser {
    id: number;
    email: string;
    name: string;
    isAdmin: boolean;
}

export interface IUserState {
    isAuthorized: boolean;
    isLoading: boolean;
    data: IUser;
}

export interface IAllUsersState {
    users: Array<IUser>;
}

export interface IField {
    id: number;
    collectionId: number;
    label: string;
    type: FieldTypes;
}

export interface ICollection {
    id: number;
    userId: number;
    image: string | null;
    subject: CollectionSubjects;
    title: string;
    description: string;
    user?: IUser;
    fields?: Array<IField>;
}

export interface ICollectionState {
    data: ICollection;
}

export interface ICollectionsState {
    collections: Array<ICollection>;
}


export interface IItem {
    id: number;
    collectionId: number;
    createdAt: string;
    title: string;
    collection: ICollection;
}

export interface IFieldValue {
    id: number;
    fieldId: number;
    itemId: number;
    value: string;
    field: IField;
}

export interface IItemWithFields {
    item: IItem;
    fields: IFieldValue[];
}