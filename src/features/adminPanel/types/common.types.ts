import { SyntheticEvent } from 'react';
import { IUser } from '../../../types/slices.types';
import { UserTableColumns, SortDirections } from '../configs/table.config';

export type TableColumnType<T> = {
    id: T;
    label: string;
    padding: 'normal' | 'checkbox' | 'none';
};

export type UsersTableDataProps = {
    usersList: Array<IUser>;
    selectedUsers: Array<number>;
    toggleUserSelect: (id: number) => void;
    toggleAllUsersSelect: () => void;
};

export type UsersTableRowProps = {
    user: IUser;
    handleClick: (evt: SyntheticEvent) => void;
    isSelected: boolean;
};

export type UsersTableHeadProps = {
    allSelected: boolean;
    isIndeterminate: boolean;
    selectAll: (evt: SyntheticEvent) => void;
    sortedBy?: UserTableColumns;
    sortDirection: SortDirections;
    changeSortParams: (param: UserTableColumns) => void;
};

export type UsersTableControlsProps = {
    selectedCount: number;
    handleDelete: () => Promise<void>;
    toggleUsersAdminRole: (isAdmin: boolean) => Promise<void>;
};
