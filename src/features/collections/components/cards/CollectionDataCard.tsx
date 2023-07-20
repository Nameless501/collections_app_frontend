import { FC, useState } from 'react';
import { Paper, Box } from '@mui/material';
import CollectionDataCardInfo from './CollectionDataCardInfo';
import CollectionFieldsTable from './CollectionFieldsTable';
import { CollectionDataTabs } from '../../configs/enums.config';
import { CollectionDataCardPropsType } from '../../types/common.types';
import CollectionDataCardTabs from './CollectionDataCardNavigation';
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
    const [currentTab, setCurrentTab] = useState<CollectionDataTabs>(
        CollectionDataTabs.info
    );

    return (
        <Paper
            elevation={3}
            sx={{
                width: '100%',
                minWidth: { xs: '80vw', md: '50vw' },
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                position: 'relative',
            }}
        >
            <Box sx={{ p: 1 }}>
                {collection && collection.fields && (
                    <>
                        {currentTab === CollectionDataTabs.fields && (
                            <CollectionFieldsTable
                                fields={collection.fields}
                                isEditable={isOwner || isAdmin}
                                handleEdit={handleFieldEdit}
                                handleDelete={handleFieldDelete}
                                openNewFieldsForm={openNewFieldsForm}
                            />
                        )}
                        {currentTab === CollectionDataTabs.info && (
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
                        )}
                    </>
                )}
            </Box>
            <CollectionDataCardTabs
                currentTab={currentTab}
                changeTab={(tab: CollectionDataTabs) => setCurrentTab(tab)}
            />
        </Paper>
    );
};
