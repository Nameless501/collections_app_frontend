import { FC } from 'react';
import { ListItem, List } from '@mui/material';
import ItemCardSmall from './ItemCardSmall';
import { ItemsListPropsType } from '../types/common.types';

export const ItemsList: FC<ItemsListPropsType> = ({
    items,
    showDelete,
    onSubmit,
}) => {
    return (
        <List
            sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{ p: 1, flexBasis: 300, flexGrow: 1 }}
                >
                    <ItemCardSmall
                        item={item}
                        showDelete={showDelete}
                        onSubmit={onSubmit}
                    />
                </ListItem>
            ))}
        </List>
    );
};
