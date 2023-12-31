import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Card, CardActionArea, Typography, Grid, Divider } from '@mui/material';
import { AppRoutes } from '../../../../configs/routes.config';
import CollectionCardImage from './CollectionCardImage';
import { setRouteParam } from '../../../../utils/helpers.util';
import { CollectionCardPropsType } from '../../types/common.types';
import { cardLabelsConfig } from '../../configs/content.config';
import { getCollectionSubjectValue } from '../../utils/helpers.util';

const CollectionCard: FC<CollectionCardPropsType> = ({
    id,
    title,
    subject,
    image,
    user,
    isOwner,
}) => {
    const { t } = useTranslation();

    return (
        <Card
            elevation={4}
            sx={{
                width: { xs: '85vw', md: '50vw', lg: '60vw', xl: '50vw' },
                display: 'flex',
                maxWidth: 700,
                minHeight: 100,
            }}
        >
            <CardActionArea
                component={RouterLink}
                to={setRouteParam(AppRoutes.collectionData, id)}
            >
                <Grid
                    container
                    sx={{ columnGap: { xs: 1, sm: 2 } }}
                    wrap="nowrap"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={2}
                        sx={{
                            minWidth: { xs: 80, sm: 100 },
                            p: 0.5,
                            height: 100,
                        }}
                    >
                        <CollectionCardImage image={image} />
                    </Grid>
                    <Grid
                        item
                        container
                        xs
                        direction="column"
                        justifyContent="center"
                        gap={{ xs: 0.5, lg: 1 }}
                        wrap="nowrap"
                        zeroMinWidth
                        sx={{ p: 1 }}
                    >
                        <Typography
                            variant="h6"
                            component="h3"
                            fontSize={{ xs: 20, lg: 22 }}
                        >
                            {title}
                        </Typography>
                        <Grid
                            item
                            container
                            direction="row"
                            sx={{
                                flexWrap: 'wrap',
                                columnGap: { xs: 0.5, sm: 1, md: 2 },
                                rowGap: 0.25,
                            }}
                        >
                            <Typography
                                color="text.secondary"
                                fontSize={{ xs: 12, sm: 14, lg: 16 }}
                            >
                                {t(cardLabelsConfig.id, { id })}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Typography
                                color="text.secondary"
                                fontSize={{ xs: 12, sm: 14, lg: 16 }}
                            >
                                {t(cardLabelsConfig.subject, {
                                    subject: t(
                                        getCollectionSubjectValue(subject)
                                    ),
                                })}
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Typography
                                color="text.secondary"
                                fontSize={{ xs: 12, sm: 14, lg: 16 }}
                            >
                                {isOwner
                                    ? t(cardLabelsConfig.userAuthor)
                                    : t(cardLabelsConfig.author, {
                                          name: user?.name,
                                      })}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
};

export default CollectionCard;
