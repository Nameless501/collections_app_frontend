import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Tooltip, IconButton } from '@mui/material';
import { ButtonWithIconProps } from '../types/props.types';

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
    tooltip,
    icon: Icon,
    isLink = false,
    link,
    handleClick,
    disabled = false,
    large = false,
    color,
}) => {
    return (
        <Tooltip title={tooltip} arrow>
            <Box component="span">
                <IconButton
                    component={isLink ? RouterLink : 'button'}
                    to={link}
                    onClick={handleClick}
                    disabled={disabled}
                    color={color}
                >
                    <Icon fontSize={large ? 'large' : 'medium'} />
                </IconButton>
            </Box>
        </Tooltip>
    );
};

export default ButtonWithIcon;
