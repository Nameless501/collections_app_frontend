import { FC } from 'react';
import { TableCell, TableRow, Checkbox } from '@mui/material';
import { UsersTableRowProps } from '../types/common.types';
import LaunchIcon from '@mui/icons-material/Launch';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import { AppRoutes } from '../../../configs/routes.config';
import { setRouteParam } from '../../../utils/helpers.util';

const UsersTableRow: FC<UsersTableRowProps> = ({
    user,
    handleClick,
    isSelected,
}) => {
    return (
        <TableRow
            hover
            onClick={handleClick}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={-1}
            key={user.name}
            selected={isSelected}
            sx={{ cursor: 'pointer' }}
        >
            <TableCell padding="checkbox" sx={{ pr: 1 }}>
                <Checkbox color="primary" checked={isSelected} />
            </TableCell>
            <TableCell padding="checkbox">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell
                sx={
                    user.isAdmin
                        ? { color: ({ palette }) => palette.warning.main }
                        : {}
                }
                padding="checkbox"
            >
                {user.isAdmin ? 'Yes' : 'No'}
            </TableCell>
            <TableCell padding="checkbox">
                <ButtonWithIcon
                    icon={LaunchIcon}
                    isLink={true}
                    tooltip="Edit profile"
                    link={setRouteParam(AppRoutes.userData, user.id)}
                />
            </TableCell>
        </TableRow>
    );
};

export default UsersTableRow;
