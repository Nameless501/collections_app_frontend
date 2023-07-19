import { FC } from 'react';
import { Fab, Tooltip } from '@mui/material';
import { CustomFabPropsType } from '../types/props.types';
import { useTranslation } from 'react-i18next';

const CustomFab: FC<CustomFabPropsType> = ({
    icon,
    tooltip,
    color,
    size,
    sx,
    handleClick,
}) => {
    const { t } = useTranslation();

    return (
        <Tooltip title={t(tooltip)} arrow>
            <Fab color={color} sx={sx} size={size} onClick={handleClick}>
                {icon}
            </Fab>
        </Tooltip>
    );
};

export default CustomFab;
