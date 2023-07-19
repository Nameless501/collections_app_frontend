import { FC } from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { CollectionDataTabs } from '../../configs/enums.config';
import { CollectionDataCardTabsPropsType } from '../../types/common.types';
import { dataCardTabsConfig } from '../../configs/content.config';
import { useTranslation } from 'react-i18next';

const CollectionDataCardTabs: FC<CollectionDataCardTabsPropsType> = ({
    currentTab,
    changeTab,
}) => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                py: 0.5,
                bgcolor: ({ palette }) => palette.action.hover,
            }}
        >
            <BottomNavigation
                showLabels
                value={currentTab}
                onChange={(_evt, value) => changeTab(value)}
                sx={{ bgcolor: 'transparent' }}
            >
                <BottomNavigationAction
                    label={t(dataCardTabsConfig.info)}
                    value={CollectionDataTabs.info}
                    icon={<DashboardIcon fontSize="large" />}
                />
                <BottomNavigationAction
                    label={t(dataCardTabsConfig.fields)}
                    value={CollectionDataTabs.fields}
                    icon={<EditNoteIcon fontSize="large" />}
                />
            </BottomNavigation>
        </Box>
    );
};

export default CollectionDataCardTabs;
