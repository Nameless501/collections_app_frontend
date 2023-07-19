import { FC, SyntheticEvent, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../store/store';
import { UserProfile, ProfileFormTypes } from '../features/profile';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { ProfilePagePropsType } from '../types/props.types';
import { UserCollections } from '../features/collections';
import { Box, Tabs, Tab } from '@mui/material';
import {
    ProfilePageTabs,
    ProfilePageTabsConfig,
} from '../configs/navigation.config';

const ProfilePage: FC<ProfilePagePropsType> = ({ type }) => {
    const { t } = useTranslation();

    const [currentTab, setCurrentTab] = useState<ProfilePageTabs>(
        ProfilePageTabs.profile
    );

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const { id: pageId } = useParams();

    const userId = useMemo(
        () =>
            type === ProfileFormTypes.selfProfile
                ? currentUser.id
                : Number(pageId),
        [type, currentUser, pageId]
    );

    const handleTabChange = (_evt: SyntheticEvent, newValue: ProfilePageTabs) =>
        setCurrentTab(newValue);

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
                        {ProfilePageTabsConfig.map(
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
                {currentTab === ProfilePageTabs.profile && (
                    <UserProfile userId={userId} />
                )}
                {currentTab === ProfilePageTabs.collections && (
                    <UserCollections userId={userId} />
                )}
            </Box>
        </FlexCenterWrapper>
    );
};

export default ProfilePage;
