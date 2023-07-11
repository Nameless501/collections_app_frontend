import { FC } from 'react';
import { alpha, Stack, Toolbar, Typography } from '@mui/material';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import RemoveModeratorIcon from '@mui/icons-material/RemoveModerator';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { UsersTableControlsProps } from '../types/common.types';

const UsersTableControls: FC<UsersTableControlsProps> = ({
    selectedCount,
    handleDelete,
    toggleUsersAdminRole,
}) => {
    return (
        <Toolbar
            sx={{
                width: '100%',
                ...(selectedCount > 0 && {
                    bgcolor: ({ palette }) =>
                        alpha(
                            palette.primary.main,
                            palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ width: '100%' }}
            >
                <Typography variant="h6">{selectedCount} selected</Typography>
                <Stack direction="row" spacing={2}>
                    <ButtonWithIcon
                        tooltip="Give admin role"
                        icon={AddModeratorIcon}
                        large={true}
                        disabled={selectedCount === 0}
                        handleClick={() => toggleUsersAdminRole(true)}
                    />
                    <ButtonWithIcon
                        tooltip="Take admin role"
                        icon={RemoveModeratorIcon}
                        large={true}
                        disabled={selectedCount === 0}
                        handleClick={() => toggleUsersAdminRole(false)}
                    />
                    <ButtonWithIcon
                        tooltip="Delete users"
                        icon={PersonRemoveIcon}
                        large={true}
                        disabled={selectedCount === 0}
                        handleClick={handleDelete}
                    />
                </Stack>
            </Stack>
        </Toolbar>
    );
};

export default UsersTableControls;
