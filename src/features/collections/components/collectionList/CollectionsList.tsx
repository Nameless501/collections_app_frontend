import { FC } from 'react';
import { Box, List, ListItem } from '@mui/material';
import DeleteCollectionButton from '../common/DeleteCollectionButton';
import CollectionCard from '../cards/CollectionCard';
import { AllCollectionsListPropsType } from '../../types/common.types';

const CollectionsList: FC<AllCollectionsListPropsType> = ({
    collections,
    userId,
    isAdmin,
}) => {
    return (
        <List>
            {collections.map((collection) => {
                const isOwner = userId === collection.userId;
                return (
                    <ListItem key={collection.id} sx={{ my: 1 }}>
                        {isOwner || isAdmin ? (
                            <Box sx={{ position: 'relative' }}>
                                <CollectionCard
                                    {...collection}
                                    isOwner={isOwner}
                                />
                                <DeleteCollectionButton
                                    collectionId={collection.id}
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        top: -10,
                                        right: -10,
                                        transform: 'scale(0.9)',
                                    }}
                                />
                            </Box>
                        ) : (
                            <CollectionCard {...collection} isOwner={false} />
                        )}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default CollectionsList;
