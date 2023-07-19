import { FC, Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardActionArea, Typography, Grid } from '@mui/material';
import { AppRoutes } from '../../../configs/routes.config';
import { getFormattedDate, setRouteParam } from '../../../utils/helpers.util';
import { ItemCardPropsType } from '../types/common.types';
import { smallCardFieldsTypeConfig } from '../configs/common.config';
import { smallCardLabelsConfig } from '../configs/content.config';
import { DeleteItemsButton } from './DeleteItemButton';

const ItemCardSmall: FC<ItemCardPropsType> = ({ item, fields }) => {
    const { t } = useTranslation();

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
                    <Grid item container xs="auto" columnGap={1}>
                        <Grid item xs="auto">
                            <Typography variant="h6" color="text.secondary">
                                {t(smallCardLabelsConfig.title)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6">{item.title}</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="space-between">
                        <Grid item container xs="auto" columnGap={1}>
                            <Grid item xs="auto">
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {t(smallCardLabelsConfig.collection)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1">
                                    {item.collection.title}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs="auto" columnGap={1}>
                            <Grid item xs="auto">
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {t(smallCardLabelsConfig.created)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1">
                                    {getFormattedDate(item.createdAt)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent="space-between"
                        wrap="wrap"
                    >
                        {fields.map(({ field, value, id }) => (
                            <Fragment key={id}>
                                {smallCardFieldsTypeConfig[field.type] && (
                                    <Grid
                                        item
                                        container
                                        xs="auto"
                                        columnGap={1}
                                    >
                                        <Grid item xs="auto">
                                            <Typography
                                                variant="subtitle1"
                                                color="text.secondary"
                                            >
                                                {`${field.label}:`}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="subtitle1">
                                                {value}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )}
                            </Fragment>
                        ))}
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
};

export default ItemCardSmall;
