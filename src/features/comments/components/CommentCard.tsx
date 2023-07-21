import { FC } from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getFormattedDate } from '../../../utils/helpers.util';
import { IComment } from '../../../types/slices.types';
import { commentCardLabelsConfig } from '../configs/content.config';
import { useTypedSelector } from '../../../store/store';
import { DeleteCommentButton } from './DeleteCommentButton';

const CommentCard: FC<IComment> = ({ id, value, createdAt, user }) => {
    const { t } = useTranslation();

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const isOwner = currentUser.id === user.id || currentUser.isAdmin;

    return (
        <Paper sx={{ width: '100%', px: 2, py: 1, position: 'relative' }}>
            <Grid container spacing={1}>
                <Grid item container justifyContent="space-between">
                    <Grid item container xs="auto" columnGap={1}>
                        <Grid item xs="auto">
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {t(commentCardLabelsConfig.user)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1">
                                {user.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container xs="auto" columnGap={1}>
                        <Grid item xs="auto">
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {t(commentCardLabelsConfig.created)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1">
                                {getFormattedDate(createdAt)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider flexItem />
                </Grid>
                <Grid item xs>
                    <Typography variant="subtitle1" textAlign="center">
                        {value}
                    </Typography>
                </Grid>
            </Grid>
            {isOwner && (
                <Box sx={{ position: 'absolute', top: -20, right: -15 }}>
                    <DeleteCommentButton commentId={id} />
                </Box>
            )}
        </Paper>
    );
};

export default CommentCard;
