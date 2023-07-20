import { FC } from 'react';
import { ListItem, List } from '@mui/material';
import ItemCardSmall from './ItemCardSmall';
import { ItemsListPropsType } from '../types/common.types';

const ItemsList: FC<ItemsListPropsType> = ({ items, showDelete, onSubmit }) => {
    return (
        <List
            sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}
        >
            {items.map((data) => (
                <ListItem
                    key={data.item.id}
                    sx={{ p: 1, flexBasis: 300, flexGrow: 1 }}
                >
                    <ItemCardSmall
                        item={data.item}
                        fields={data.fields}
                        showDelete={showDelete}
                        onSubmit={onSubmit}
                    />
                </ListItem>
            ))}
        </List>
    );
};

export default ItemsList;
