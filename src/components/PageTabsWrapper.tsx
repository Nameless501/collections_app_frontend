import { FC } from 'react';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { Box, Tabs, Tab } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { PageTabsWrapperPropsType } from '../types/props.types';

const PageTabsWrapper: FC<PageTabsWrapperPropsType> = ({
    config,
    currentTab,
    handleTabChange,
    children,
}) => {
    const { t } = useTranslation();

    return (
        <FlexCenterWrapper align="flex-start">
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                >
                    <Tabs
                        value={currentTab}
                        onChange={handleTabChange}
                        centered
                        variant="fullWidth"
                    >
                        {config.map(
                            ({ label, icon: Icon, value, iconPosition }) => (
                                <Tab
                                    label={t(label)}
                                    value={value}
                                    icon={<Icon />}
                                    iconPosition={iconPosition}
                                    key={value}
                                />
                            )
                        )}
                    </Tabs>
                </Box>
                {children}
            </Box>
        </FlexCenterWrapper>
    );
};

export default PageTabsWrapper;
