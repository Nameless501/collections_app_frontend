import { FC, useState, useEffect } from 'react';
import { TableContainer, Table, TableBody } from '@mui/material';
import useSort from '../../../hooks/useSort';
import { UsersTableDataProps } from '../types/common.types';
import UsersTableRow from './UsersTableRow';
import UsersTableHead from './UserTableHead';
import { UserTableColumns, SortDirections } from '../configs/table.config';
import { IUser } from '../../../types/slices.types';

const UsersTableData: FC<UsersTableDataProps> = ({
    usersList = [],
    selectedUsers = [],
    toggleUserSelect,
    toggleAllUsersSelect,
}) => {
    const [sortedUsers, setSortedUsers] = useState<IUser[]>(usersList);

    const [sortDirection, setSortDirection] = useState<SortDirections>(
        SortDirections.ascending
    );

    const [sortedBy, setSortedBy] = useState<UserTableColumns>(
        UserTableColumns.id
    );

    const { handleSort } = useSort(sortDirection === SortDirections.ascending);

    const changeSortParams = (param: UserTableColumns): void => {
        if (sortedBy === param) {
            setSortDirection((current) =>
                current === SortDirections.ascending
                    ? SortDirections.descending
                    : SortDirections.ascending
            );
        } else {
            setSortedBy(param);
            setSortDirection(SortDirections.ascending);
        }
    };

    useEffect(() => {
        setSortedUsers(
            [...usersList].sort((user1, user2) =>
                handleSort(user1[sortedBy], user2[sortedBy])
            )
        );
    }, [usersList, sortedBy, handleSort]);

    return (
        <TableContainer sx={{ width: '100%' }}>
            <Table>
                <UsersTableHead
                    allSelected={selectedUsers.length === usersList.length}
                    selectAll={toggleAllUsersSelect}
                    isIndeterminate={
                        selectedUsers.length > 0 &&
                        selectedUsers.length < usersList.length
                    }
                    sortedBy={sortedBy}
                    changeSortParams={changeSortParams}
                    sortDirection={sortDirection}
                />
                <TableBody>
                    {sortedUsers.map((user) => (
                        <UsersTableRow
                            key={user.id}
                            user={user}
                            handleClick={() => toggleUserSelect(user.id)}
                            isSelected={selectedUsers.includes(user.id)}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTableData;
