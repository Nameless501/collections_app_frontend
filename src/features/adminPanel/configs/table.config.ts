import { TableColumnType } from '../types/common.types';

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
            label: 'admin:users.columns.id',
            padding: 'checkbox',
        },
        {
            id: UserTableColumns.name,
            label: 'admin:users.columns.name',
            padding: 'normal',
        },
        {
            id: UserTableColumns.email,
            label: 'admin:users.columns.email',
            padding: 'normal',
        },
        {
            id: UserTableColumns.isAdmin,
            label: 'admin:users.columns.admin',
            padding: 'checkbox',
        },
    ];
