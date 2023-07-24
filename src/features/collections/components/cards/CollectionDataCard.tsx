import { FC } from 'react';
import { Paper, Box } from '@mui/material';
import CollectionDataCardInfo from './CollectionDataCardInfo';
import CollectionFieldsTable from './CollectionFieldsTable';
import { CollectionDataCardPropsType } from '../../types/common.types';
import CollectionInfoControlWrapper from './CollectionInfoControlWrapper';

export const CollectionDataCard: FC<CollectionDataCardPropsType> = ({
    collection,
    isOwner,
    isAdmin,
    handleCollectionEdit,
    handleFieldEdit,
    handleFieldDelete,
    openNewFieldsForm,
}) => {
    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                position: 'relative',
                alignSelf: 'center',
            }}
        >
            <Box sx={{ p: 1 }}>
                {collection && collection.fields && (
                    <>
                        <CollectionInfoControlWrapper
                            isEditable={isOwner || isAdmin}
                            collectionId={collection.id}
                            handleEdit={handleCollectionEdit}
                        >
                            <CollectionDataCardInfo
                                collection={collection}
                                isOwner={isOwner}
                            />
                        </CollectionInfoControlWrapper>
                        <CollectionFieldsTable
                            fields={collection.fields}
                            isEditable={isOwner || isAdmin}
                            handleEdit={handleFieldEdit}
                            handleDelete={handleFieldDelete}
                            openNewFieldsForm={openNewFieldsForm}
                        />
                    </>
                )}
            </Box>
        </Paper>
    );
};
