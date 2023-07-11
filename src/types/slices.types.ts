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
