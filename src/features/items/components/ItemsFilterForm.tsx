import { FC } from 'react';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import ControlledSelect from '../../../components/ControlledSelect';
import { SortDirections } from '../../../configs/common.config';
import { sortSelectConfig } from '../configs/forms.config';
import SortIcon from '@mui/icons-material/Sort';
import { ItemsFilterFormPropsType } from '../types/common.types';

const ItemsFilterForm: FC<ItemsFilterFormPropsType> = ({
    control,
    toggleSortDirection,
    sortDirection,
}) => {
    return (
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
                    config={sortSelectConfig}
                    multiple={false}
                    control={control}
                    size="small"
                />
            </Box>
            <ToggleButtonGroup
                size="small"
                value={sortDirection}
                exclusive
                onChange={toggleSortDirection}
            >
                <ToggleButton value={SortDirections.descending}>
                    <SortIcon />
                </ToggleButton>
                <ToggleButton value={SortDirections.ascending}>
                    <SortIcon sx={{ transform: 'rotate(180deg)' }} />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    );
};

export default ItemsFilterForm;
