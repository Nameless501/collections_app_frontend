import { TableColumnType } from '../types/common.types';

export enum SortDirections {
    ascending = 'asc',
    descending = 'desc',
}

export enum UserTableColumns {
    id = 'id',
    name = 'name',
    email = 'email',
    isAdmin = 'isAdmin',
}

export const userTableColumnsConfig: Array<TableColumnType<UserTableColumns>> =
    [
        {
            id: UserTableColumns.id,
            label: 'ID',
            padding: 'checkbox',
        },
        {
            id: UserTableColumns.name,
            label: 'Name',
            padding: 'normal',
        },
        {
            id: UserTableColumns.email,
            label: 'Email',
            padding: 'normal',
        },
        {
            id: UserTableColumns.isAdmin,
            label: 'Admin',
            padding: 'checkbox',
        },
    ];
