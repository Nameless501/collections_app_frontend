import { FC } from 'react';
import { TopBiggestCollections } from '../features/collections';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { RecentItems } from '../features/items';
import { Stack } from '@mui/material';
import { TagsCloud } from '../features/tags';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MainPage: FC = () => {
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <FlexCenterWrapper align="flex-start">
            <Stack spacing={3}>
                <TopBiggestCollections />
                <RecentItems />
                {matches && <TagsCloud />}
            </Stack>
        </FlexCenterWrapper>
    );
};

export default MainPage;
