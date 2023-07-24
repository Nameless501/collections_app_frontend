import { FC, SyntheticEvent, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector } from '../store/store';
import { UserProfile, ProfileFormTypes } from '../features/profile';
import { ProfilePagePropsType } from '../types/props.types';
import { UserCollections } from '../features/collections';
import {
    ProfilePageTabs,
    profilePageTabsConfig,
} from '../configs/navigation.config';
import PageTabsWrapper from '../components/PageTabsWrapper';
import { Box } from '@mui/material';

const ProfilePage: FC<ProfilePagePropsType> = ({ type }) => {
    const [currentTab, setCurrentTab] = useState<number>(
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

    const handleTabChange = (_evt: SyntheticEvent, newValue: number) =>
        setCurrentTab(newValue);

    return (
        <PageTabsWrapper
            currentTab={currentTab}
            handleTabChange={handleTabChange}
            config={profilePageTabsConfig}
        >
            <Box
                sx={{
                    width: '100%',
                    display:
                        currentTab === ProfilePageTabs.profile
                            ? 'flex'
                            : 'none',
                    justifyContent: 'center',
                }}
            >
                <UserProfile userId={userId} />
            </Box>
            <Box
                sx={{
                    display:
                        currentTab === ProfilePageTabs.collections
                            ? 'block'
                            : 'none',
                }}
            >
                <UserCollections userId={userId} />
            </Box>
        </PageTabsWrapper>
    );
};

export default ProfilePage;
