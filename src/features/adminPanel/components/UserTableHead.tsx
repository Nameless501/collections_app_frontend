import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
    TableCell,
    TableHead,
    TableRow,
    Checkbox,
    TableSortLabel,
} from '@mui/material';
import { UsersTableHeadProps } from '../types/common.types';
import { userTableColumnsConfig } from '../configs/table.config';

const UsersTableHead: FC<UsersTableHeadProps> = ({
    allSelected,
    selectAll,
    isIndeterminate,
    sortedBy,
    sortDirection,
    changeSortParams,
}) => {
    const { t } = useTranslation();

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={isIndeterminate}
                        checked={allSelected}
                        onChange={selectAll}
                    />
                </TableCell>
                {userTableColumnsConfig.map((column) => (
                    <TableCell
                        key={column.id}
                        align="left"
                        padding={column.padding}
                        sortDirection={
                            sortedBy === column.id ? sortDirection : false
                        }
                    >
                        <TableSortLabel
                            active={sortedBy === column.id}
                            direction={
                                sortedBy === column.id ? sortDirection : 'asc'
                            }
                            onClick={() => changeSortParams(column.id)}
                        >
                            {t(column.label)}
                        </TableSortLabel>
                    </TableCell>
                ))}
                <TableCell padding="checkbox" />
            </TableRow>
        </TableHead>
    );
};

export default UsersTableHead;
