import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    ListItemIcon,
    ListItemText,
    ListItem,
    ListItemButton,
} from '@mui/material';
import { LinksListPropsType } from '../types/props.types';

const LinksList: FC<LinksListPropsType> = ({
    linksList,
    fontSize,
    iconWidth,
}) => {
    return (
        <>
            {linksList.map(({ title, route, icon: Icon }, index) => (
                <ListItem key={title + index} disablePadding>
                    <ListItemButton component={RouterLink} to={route}>
                        <ListItemIcon sx={{ minWidth: iconWidth }}>
                            <Icon sx={{ fontSize }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={title}
                            primaryTypographyProps={{ fontSize }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};

export default LinksList;
