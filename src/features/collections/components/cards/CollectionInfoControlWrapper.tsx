import { FC } from 'react';
import { Box } from '@mui/material';
import { CollectionInfoControlWrapperPropsType } from '../../types/common.types';
import DeleteCollectionButton from '../common/DeleteCollectionButton';
import EditIcon from '@mui/icons-material/Edit';
import { AppRoutes } from '../../../../configs/routes.config';
import CustomFab from '../../../../components/CustomFab';
import { dataCardTooltipsConfig } from '../../configs/content.config';

const CollectionInfoControlWrapper: FC<
    CollectionInfoControlWrapperPropsType
> = ({ collectionId, isEditable, handleEdit, children }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            {children}
            {isEditable && (
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'flex',
                        top: -5,
                        right: -15,
                        gap: 2,
                    }}
                >
                    <CustomFab
                        size="small"
                        color="primary"
                        handleClick={handleEdit}
                        icon={<EditIcon fontSize="small" />}
                        tooltip={dataCardTooltipsConfig.editCollection}
                    />
                    <DeleteCollectionButton
                        collectionId={collectionId}
                        size="small"
                        color="error"
                        redirect={AppRoutes.allCollections}
                    />
                </Box>
            )}
        </Box>
    );
};

export default CollectionInfoControlWrapper;
