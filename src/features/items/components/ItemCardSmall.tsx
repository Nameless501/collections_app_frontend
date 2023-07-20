import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardActionArea, Grid } from '@mui/material';
import { AppRoutes } from '../../../configs/routes.config';
import { setRouteParam } from '../../../utils/helpers.util';
import { ItemCardPropsType } from '../types/common.types';
import ItemInfo from './ItemInfo';
import FieldsListShort from './FieldsListShort';
import { smallCardFieldsTypeConfig } from '../configs/common.config';

const ItemCardSmall: FC<ItemCardPropsType> = ({ item, fields }) => {
    return (
        <Card
            elevation={4}
            sx={{
                display: 'flex',
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
        </Card>
    );
};

export default ItemCardSmall;
