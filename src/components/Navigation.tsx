import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavigationPropsType } from '../types/common.types';

const Navigation: FC<NavigationPropsType> = ({ linksList }) => {
    return (
        <List component="nav">
            {linksList.map(({ title, route, icon: Icon }, index) => (
                <ListItem key={title + index} disablePadding>
                        <ListItemButton component={RouterLink} to={route}>
                            <ListItemIcon>
                                <Icon />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                        </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}

export default Navigation;