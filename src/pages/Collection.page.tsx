import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { CollectionData } from '../features/collections';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { CollectionItems } from '../features/items';
import { Stack } from '@mui/material';

const CollectionPage: FC = () => {
    const { id } = useParams();

    return (
        <FlexCenterWrapper>
            <Stack spacing={5}>
                <CollectionData collectionId={Number(id)} />
                <CollectionItems collectionId={Number(id)} />
            </Stack>
        </FlexCenterWrapper>
    );
};

export default CollectionPage;
