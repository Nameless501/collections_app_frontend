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
    type: string;
}

export interface ICollection {
    id: number;
    userId: number;
    image: string | null;
    subject: string;
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
