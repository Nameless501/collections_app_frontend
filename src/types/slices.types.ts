export type UserStateCredentialsType = {
    id?: number;
    email?: string;
    name?: string;
    isAdmin?: boolean;
};

export type UserStateType = {
    isAuthorized: boolean;
    isLoading: boolean;
    data: UserStateCredentialsType;
};
