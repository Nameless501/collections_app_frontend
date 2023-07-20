import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, CardActionArea, Grid } from '@mui/material';
import { AppRoutes } from '../../../configs/routes.config';
import { setRouteParam } from '../../../utils/helpers.util';
import { ItemCardPropsType } from '../types/common.types';
import ItemInfo from './ItemInfo';
import FieldsListShort from './FieldsListShort';
import { smallCardFieldsTypeConfig } from '../configs/common.config';
import { LikeButton } from '../../likes/components/LikeButton';
import { DeleteItemsButton } from './DeleteItemButton';
import { useTypedSelector } from '../../../store/store';

const ItemCardSmall: FC<ItemCardPropsType> = ({
    item,
    fields,
    showDelete = false,
    onSubmit,
}) => {
    const { data: currentUser } = useTypedSelector((state) => state.user);

    const isOwner =
        item.collection.userId === currentUser.id || currentUser.isAdmin;

    return (
        <Card
            elevation={4}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}
        >
            <CardActionArea
                component={RouterLink}
                to={setRouteParam(AppRoutes.itemData, item.id)}
            >
                <Grid container sx={{ p: 2 }}>
                    <ItemInfo {...item} />
                    <FieldsListShort
                        fields={fields.filter(
                            ({ field }) => smallCardFieldsTypeConfig[field.type]
                        )}
                    />
                </Grid>
            </CardActionArea>
            <Box
                sx={{
                    py: 0.5,
                    px: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}
            >
                <LikeButton
                    itemId={item.id}
                    likes={item.likes ? item.likes : []}
                />
                {showDelete && isOwner && (
                    <DeleteItemsButton itemId={item.id} onSubmit={onSubmit} />
                )}
            </Box>
        </Card>
    );
};

export default ItemCardSmall;
