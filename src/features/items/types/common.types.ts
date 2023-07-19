import {
    IFieldValue,
    IItem,
    IItemWithFields,
} from '../../../types/slices.types';

export type ItemCardPropsType = {
    item: IItem;
    fields: IFieldValue[];
};

export type ItemsListPropsType = {
    items: IItemWithFields[];
};

export type CollectionItemsPropsType = {
    collectionId: number;
};

export type DeleteItemsButtonPropsType = {
    itemId: number;
    onSubmit?: (itemId: number) => void;
};