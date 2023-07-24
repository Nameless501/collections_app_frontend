import { SortDirections } from '../../../configs/common.config';
import { SelectConfigType } from '../../../types/common.types';

export enum ItemFormInputs {
    title = 'title',
    tags = 'tags',
    fields = 'fields',
}

export const newItemDefaultValues = {
    [ItemFormInputs.title]: '',
    [ItemFormInputs.tags]: [],
};

export const titleInputConfig = {
    name: ItemFormInputs.title,
    label: 'item:form.labels.title',
};

export const getFieldIndexedName = (index: number): string =>
    `fields.${index}.value`;

export enum SortFormInputs {
    sortBy = 'sortBy',
    sortDirection = 'sortDirection',
}

export enum SortFormOptions {
    title = 'title',
    createdAt = 'createdAt',
}

export const sortSelectConfig: SelectConfigType = {
    name: SortFormInputs.sortBy,
    label: 'item:form.labels.sort',
    id: 'items-sort-select',
    options: [
        {
            value: SortFormOptions.title,
            name: 'item:form.sort.title',
        },
        {
            value: SortFormOptions.createdAt,
            name: 'item:form.sort.date',
        },
    ],
};

export const sortFormDefaultValue = {
    [SortFormInputs.sortBy]: SortFormOptions.createdAt,
    [SortFormInputs.sortDirection]: SortDirections.ascending,
};
