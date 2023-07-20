import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CollectionData } from '../features/collections';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { CollectionItems } from '../features/items';
import { Stack } from '@mui/material';
import { NewItemDialog } from '../features/items';

const CollectionPage: FC = () => {
    const [isOwner, setIsOwner] = useState<boolean>(false);

    const { id } = useParams();

    return (
        <FlexCenterWrapper>
            <Stack spacing={5}>
                <CollectionData
                    collectionId={Number(id)}
                    setOwner={(value: boolean) => setIsOwner(value)}
                />
                <CollectionItems collectionId={Number(id)} />
                {isOwner && <NewItemDialog collectionId={Number(id)} />}
            </Stack>
        </FlexCenterWrapper>
    );
};

export default CollectionPage;
