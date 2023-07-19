import { FC } from 'react';
import { TopBiggestCollections } from '../features/collections';
import FlexCenterWrapper from '../components/FlexCenterWrapper';

const MainPage: FC = () => {
    return (
        <FlexCenterWrapper align="flex-start">
            <TopBiggestCollections />
        </FlexCenterWrapper>
    );
};

export default MainPage;
