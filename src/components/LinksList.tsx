import { FC } from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();

    return (
        <>
            {linksList.map(({ text, route, icon: Icon }, index) => (
                <ListItem key={text + index} disablePadding>
                    <ListItemButton component={RouterLink} to={route}>
                        <ListItemIcon sx={{ minWidth: iconWidth }}>
                            <Icon sx={{ fontSize }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={t(text)}
                            primaryTypographyProps={{ fontSize }}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </>
    );
};

export default LinksList;
