import { FC } from 'react';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { AllCollections } from '../features/collections';

const AllCollectionsPage: FC = () => {
    return (
        <FlexCenterWrapper align="flex-start">
            <AllCollections />
        </FlexCenterWrapper>
    );
};

export default AllCollectionsPage;
