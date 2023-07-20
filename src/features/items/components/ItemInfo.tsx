import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Grid, Chip, List, ListItem } from '@mui/material';
import { getFormattedDate } from '../../../utils/helpers.util';
import { smallCardLabelsConfig } from '../configs/content.config';
import { IItem } from '../../../types/slices.types';

const ItemInfo: FC<IItem> = ({ title, collection, createdAt, tags }) => {
    const { t } = useTranslation();

    return (
        <>
            <Grid item xs>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    display="inline"
                >
                    {t(smallCardLabelsConfig.title)}
                </Typography>
                <Typography variant="h6" display="inline">
                    {title}
                </Typography>
            </Grid>
            <Grid item container justifyContent="space-between">
                <Grid item container xs="auto" columnGap={1}>
                    <Grid item xs="auto">
                        <Typography variant="subtitle1" color="text.secondary">
                            {t(smallCardLabelsConfig.collection)}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            {collection.title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs="auto" columnGap={1}>
                    <Grid item xs="auto">
                        <Typography variant="subtitle1" color="text.secondary">
                            {t(smallCardLabelsConfig.created)}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            {getFormattedDate(createdAt)}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {tags && (
                <Grid item xs>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        display="inline"
                    >
                        {t(smallCardLabelsConfig.tags)}
                    </Typography>
                    <List sx={{ display: 'inline' }}>
                        {tags.map((tag) => (
                            <ListItem
                                key={tag.id}
                                sx={{
                                    p: 0.5,
                                    display: 'inline-block',
                                    width: 'fit-content',
                                }}
                            >
                                <Chip label={tag.value} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            )}
        </>
    );
};

export default ItemInfo;
