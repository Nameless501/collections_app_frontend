import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography, Divider } from '@mui/material';
import CollectionCardImage from './CollectionCardImage';
import { CollectionInfoPropsType } from '../../types/common.types';
import { dataCardLabelsConfig } from '../../configs/content.config';
import { getCollectionSubjectValue } from '../../utils/helpers.util';
import Markdown from 'marked-react';
import DOMPurify from 'dompurify';

const CollectionDataCardInfo: FC<CollectionInfoPropsType> = ({
    collection,
    isOwner,
}) => {
    const { t } = useTranslation();

    return (
        <Box sx={{ pr: { lg: 3 } }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5}>
                    <Box sx={{ aspectRatio: { xs: '3/2' } }}>
                        <CollectionCardImage
                            image={collection.image as string}
                        />
                    </Box>
                </Grid>
                <Grid
                    item
                    container
                    xs
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    gap={3}
                    sx={{ mx: 3 }}
                >
                    <Grid item container xs="auto" columnGap={1}>
                        <Grid item xs="auto">
                            <Typography variant="h5" color="text.secondary">
                                {t(dataCardLabelsConfig.title)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h5">
                                {collection.title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justifyContent="space-between">
                        <Grid item container xs="auto" columnGap={1}>
                            <Grid item xs="auto">
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {t(dataCardLabelsConfig.subject)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1">
                                    {t(
                                        getCollectionSubjectValue(
                                            collection.subject
                                        )
                                    )}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider orientation="vertical" flexItem />
                        <Grid item container xs="auto" columnGap={1}>
                            <Grid item xs="auto">
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                >
                                    {t(dataCardLabelsConfig.author)}
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1">
                                    {isOwner
                                        ? t(dataCardLabelsConfig.user)
                                        : collection.user?.name}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    alignItems="flex-start"
                    direction="column"
                    sx={{ mx: 2 }}
                >
                    <Grid item xs>
                        <Typography
                            variant="subtitle1"
                            component="span"
                            color="text.secondary"
                        >
                            {t(dataCardLabelsConfig.description)}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Markdown>
                            {DOMPurify.sanitize(collection.description)}
                        </Markdown>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CollectionDataCardInfo;
