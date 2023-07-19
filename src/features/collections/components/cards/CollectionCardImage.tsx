import { FC, useState } from 'react';
import { Avatar, Box, CardMedia } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { CollectionCardImagePropsType } from '../../types/common.types';
import { useTranslation } from 'react-i18next';
import { cardImageAlt } from '../../configs/content.config';

const CollectionCardImage: FC<CollectionCardImagePropsType> = ({ image }) => {
    const { t } = useTranslation();

    const [imageError, setImageError] = useState<boolean>(false);

    return (
        <Box sx={{ height: '100%', borderRadius: 0.5, overflow: 'hidden' }}>
            {image !== null && !imageError ? (
                <CardMedia
                    component="img"
                    height="100%"
                    image={image as string}
                    onError={() => setImageError(true)}
                    alt={t(cardImageAlt)}
                    sx={{ objectFit: 'cover' }}
                />
            ) : (
                <Avatar variant="square" sx={{ width: '100%', height: '100%' }}>
                    <ImageIcon fontSize="large" />
                </Avatar>
            )}
        </Box>
    );
};

export default CollectionCardImage;
