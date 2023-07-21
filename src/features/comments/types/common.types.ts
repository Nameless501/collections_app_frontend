import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IComment } from '../../../types/slices.types';

export type ItemCommentsPropsType = {
    itemId: number;
};

export type CommentsListPropsType = {
    comments: IComment[];
};

export type NewCommentFormPropsType = {
    onSubmit: SubmitHandler<FieldValues>;
};

export type DeleteCommentButtonPropsType = {
    commentId: number;
};
