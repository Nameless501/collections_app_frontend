import { FC } from 'react';
import { List, ListItem } from '@mui/material';
import { CommentsListPropsType } from '../types/common.types';
import CommentCard from './CommentCard';

const CommentsList: FC<CommentsListPropsType> = ({ comments }) => {
    return (
        <List
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            {comments.map((comment) => (
                <ListItem key={comment.id}>
                    <CommentCard {...comment} />
                </ListItem>
            ))}
        </List>
    );
};

export default CommentsList;
