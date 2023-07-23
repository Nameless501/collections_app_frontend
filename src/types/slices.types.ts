import { CollectionSubjects, FieldTypes } from '../configs/common.config';

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

export interface ITag {
    id: number;
    value: string;
    itemTags: Array<{
        id: number;
        tagId: number;
        itemId: number;
    }>;
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

export interface ICollectionItemsState {
    items: Array<IItem>;
}

export interface ILikes {
    id: number;
    ItemId: number;
    userId: number;
}

export interface IFieldValue {
    id: number;
    fieldId: number;
    itemId: number;
    value: string;
    field: IField;
}

export interface IItem {
    id: number;
    collectionId: number;
    createdAt: string;
    title: string;
    collection: ICollection;
    tags?: ITag[];
    likes?: ILikes[];
    fields?: IFieldValue[];
}

export interface IComment {
    id: number;
    value: string;
    itemId: number;
    userId: number;
    createdAt: string;
    user: IUser;
}

export interface IItemCommentsState {
    comments: Array<IComment>;
}
