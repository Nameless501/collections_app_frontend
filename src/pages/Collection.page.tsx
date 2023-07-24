import { FC, SyntheticEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageTabsWrapper from '../components/PageTabsWrapper';
import {
    CollectionPageTabs,
    collectionPageTabsConfig,
} from '../configs/navigation.config';
import { CollectionData } from '../features/collections';
import { CollectionItems, NewItemDialog } from '../features/items';
import { Box } from '@mui/material';

const CollectionPage: FC = () => {
    const [currentTab, setCurrentTab] = useState<number>(
        CollectionPageTabs.info
    );

    const [isOwner, setIsOwner] = useState<boolean>(false);

    const { id } = useParams();

    const handleTabChange = (_evt: SyntheticEvent, newValue: number) =>
        setCurrentTab(newValue);

    return (
        <PageTabsWrapper
            currentTab={currentTab}
            handleTabChange={handleTabChange}
            config={collectionPageTabsConfig}
        >
            <Box
                sx={{
                    display:
                        currentTab === CollectionPageTabs.info
                            ? 'block'
                            : 'none',
                }}
            >
                <CollectionData
                    collectionId={Number(id)}
                    setOwner={(value: boolean) => setIsOwner(value)}
                />
            </Box>
            <Box
                sx={{
                    display:
                        currentTab === CollectionPageTabs.items
                            ? 'block'
                            : 'none',
                }}
            >
                <CollectionItems collectionId={Number(id)} />
                {isOwner && <NewItemDialog collectionId={Number(id)} />}
            </Box>
        </PageTabsWrapper>
    );
};

export default CollectionPage;
