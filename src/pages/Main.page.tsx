import { FC } from 'react';
import { TopBiggestCollections } from '../features/collections';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { RecentItems } from '../features/items';
import { Stack } from '@mui/material';

const MainPage: FC = () => {
    return (
        <FlexCenterWrapper align="flex-start">
            <Stack spacing={3}>
                <TopBiggestCollections />
                <RecentItems />
            </Stack>
        </FlexCenterWrapper>
    );
};

export default MainPage;
