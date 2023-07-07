export type UserStateType = {
    isAuthorized: boolean;
    data: {
        id?: number;
        email?: string;
        name?: string;
    };
};
