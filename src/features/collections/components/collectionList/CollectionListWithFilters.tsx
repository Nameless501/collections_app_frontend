import { FC, useMemo } from 'react';
import { Box, Button } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import ControlledSelect from '../../../../components/ControlledSelect';
import SortSelect from '../inputs/SortSelect';
import CollectionsList from './CollectionsList';
import { CollectionListWithFiltersPropsType } from '../../types/common.types';
import { SortDirections } from '../../../../configs/common.config';
import { SortFormInputs } from '../../configs/enums.config';
import { CollectionSubjects } from '../../../../configs/common.config';
import useSort from '../../../../hooks/useSort';
import {
    subjectSelectConfig,
    sortFormDefaultValues,
    formButtonsConfig,
} from '../../configs/form.config';
import { ICollection } from '../../../../types/slices.types';
import { useTranslation } from 'react-i18next';

const CollectionListWithFilters: FC<CollectionListWithFiltersPropsType> = ({
    collections = [],
    userId,
    isAdmin,
}) => {
    const { t } = useTranslation();

    const { control, reset, setValue, watch } = useForm<FieldValues>({
        defaultValues: sortFormDefaultValues,
    });

    const sortDirection = watch(SortFormInputs.sortDirection);

    const selectedSubjects = watch(SortFormInputs.subject);

    const sortedBy = watch(SortFormInputs.sortBy);

    const { handleSort } = useSort(sortDirection === SortDirections.ascending);

    const toggleSortDirection = (): void =>
        setValue(
            SortFormInputs.sortDirection,
            sortDirection === SortDirections.ascending
                ? SortDirections.descending
                : SortDirections.ascending
        );

    const filteredCollectionsList = useMemo(() => {
        const filteredList =
            selectedSubjects.length > 0
                ? collections.filter((collection) =>
                      selectedSubjects.includes(
                          collection.subject as CollectionSubjects
                      )
                  )
                : collections;
        return [...filteredList].sort((item1, item2) =>
            handleSort(
                item1[sortedBy as keyof ICollection],
                item2[sortedBy as keyof ICollection]
            )
        );
    }, [selectedSubjects, collections, sortedBy, handleSort]);

    return (
        <Box
            sx={{
                py: 2,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <Box sx={{ width: 200 }}>
                    <ControlledSelect
                        config={subjectSelectConfig}
                        multiple={true}
                        control={control}
                        size="small"
                    />
                </Box>
                <Box sx={{ width: 200 }}>
                    <SortSelect
                        control={control}
                        sortDirection={sortDirection}
                        toggleSortDirection={toggleSortDirection}
                    />
                </Box>
                <Button
                    variant="contained"
                    onClick={() => reset()}
                    color="inherit"
                >
                    {t(formButtonsConfig.clear)}
                </Button>
            </Box>
            <CollectionsList
                collections={filteredCollectionsList}
                isAdmin={isAdmin}
                userId={userId}
            />
        </Box>
    );
};

export default CollectionListWithFilters;
