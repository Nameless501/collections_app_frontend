import {
    CollectionFormInputs,
    CollectionSubjects,
    SortOptions,
    SortFormInputs,
    FieldsFormInputs,
    FieldTypes,
    CollectionFormSteps,
} from './enums.config';
import { FileInputConfigType, SelectConfigType } from '../types/common.types';
import { SortDirections } from '../../../configs/common.config';
import { getCollectionSubjectValue, getFieldTypeValue } from '../utils/helpers.util';

export const collectionAndFieldsFormConfig = {
    title: 'collection:form.new.title',
    steps: [
        {
            key: CollectionFormSteps.collection,
            label: 'collection:form.new.steps.collection'
        },
        {
            key: CollectionFormSteps.fields,
            label: 'collection:form.new.steps.fields'
        },
    ]
}

export const collectionFormConfig = [
    {
        name: CollectionFormInputs.title,
        label: 'collection:form.labels.collection.title',
    },
    {
        name: CollectionFormInputs.description,
        label: 'collection:form.labels.collection.description',
        multiline: true,
        rows: 3,
    },
];

export const subjectSelectConfig: SelectConfigType = {
    name: SortFormInputs.subject,
    label: 'collection:form.labels.collection.subject',
    id: 'subject-select',
    options: Object.keys(CollectionSubjects).map((key) => ({
        name: getCollectionSubjectValue(key),
        value: key,
    })),
};

export const fieldTypeSelectConfig = {
    name: FieldsFormInputs.type,
    label: 'collection:form.labels.fields.type',
    id: 'field-type-select',
    options: Object.keys(FieldTypes).map((key) => ({
        name: getFieldTypeValue(key),
        value: key,
    })),
};

export const getFieldTypeSelectConfig = (index: number): SelectConfigType => ({
    ...fieldTypeSelectConfig,
    name: `fields.${index}.${FieldsFormInputs.type}`,
});

export const sortSelectConfig: SelectConfigType = {
    name: SortFormInputs.sortBy,
    label: 'collection:form.labels.sort.sortBy',
    id: 'sort-by-select',
    options: [
        { 
            name: 'collection:form.labels.sort.id',
            value: SortOptions.id
        },
        { 
            name: 'collection:form.labels.sort.name',
            value: SortOptions.name
        },
    ],
};

export const fileInputConfig: FileInputConfigType = {
    name: CollectionFormInputs.file,
    label: 'collection:form.labels.collection.image',
    id: 'file-input',
};

export const fieldLabelInputConfig: FileInputConfigType = {
    name: FieldsFormInputs.label,
    label: 'collection:form.labels.fields.label',
    id: 'field-label-input',
};

export const getFieldLabelInputConfig = (index: number): FileInputConfigType => ({
    ...fieldLabelInputConfig,
    name: `fields.${index}.${FieldsFormInputs.label}`,
});

export const sortFormDefaultValues = {
    [SortFormInputs.sortBy]: SortOptions.id,
    [SortFormInputs.sortDirection]: SortDirections.ascending,
    [SortFormInputs.subject]: [],
};

export const collectionFormDefaultValues = {
    [CollectionFormInputs.title]: '',
    [CollectionFormInputs.subject]: '',
    [CollectionFormInputs.description]: '',
    [CollectionFormInputs.file]: null,
};

export const fieldDefaultValue = {
    [FieldsFormInputs.label]: '',
    [FieldsFormInputs.type]: '',
}

export const fieldsFormDefaultValues = {
    fields: [
        fieldDefaultValue,
    ],
};

export const formButtonsConfig = {
    next: 'collection:form.buttons.next',
    create: 'collection:form.buttons.create',
    update: 'collection:form.buttons.update',
    clear: 'collection:form.buttons.clear'
}
