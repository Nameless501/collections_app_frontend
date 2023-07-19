import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CollectionData } from '../features/collections';
import FlexCenterWrapper from '../components/FlexCenterWrapper';

const CollectionPage: FC = () => {
    const { id } = useParams();

    return (
        <FlexCenterWrapper>
            <CollectionData
                collectionId={Number(id)}
            />
        </FlexCenterWrapper>
    );
};

export default CollectionPage;
