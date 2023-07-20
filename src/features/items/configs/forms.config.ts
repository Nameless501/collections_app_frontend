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
