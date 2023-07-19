import { FC } from 'react';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { SortSelectPropsType } from '../../types/common.types';
import { SortDirections } from '../../../../configs/common.config';
import SortIcon from '@mui/icons-material/Sort';
import ControlledSelect from './ControlledSelect';
import { sortSelectConfig } from '../../configs/form.config';

const SortSelect: FC<SortSelectPropsType> = ({
    control,
    sortDirection,
    toggleSortDirection,
}) => {
    return (
        <Box sx={{ display: 'flex', gap: 0.5, width: '100%' }}>
            <ControlledSelect
                control={control}
                multiple={false}
                size="small"
                config={sortSelectConfig}
            />
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

export default SortSelect;
