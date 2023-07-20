import { FC } from 'react';
import { useParams } from 'react-router-dom';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { Stack } from '@mui/material';
import { ItemDataCard } from '../features/items';

const ItemPage: FC = () => {
    const { id } = useParams();

    return (
        <FlexCenterWrapper>
            <Stack spacing={5}>
                <ItemDataCard itemId={Number(id)} />
            </Stack>
        </FlexCenterWrapper>
    );
};

export default ItemPage;
