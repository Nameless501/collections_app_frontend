import { FC } from 'react';
import { Box, Button } from '@mui/material';
import { CollectionFormWrapperPropsType } from '../../types/common.types';
import { useTranslation } from 'react-i18next';

const CollectionFormWrapper: FC<CollectionFormWrapperPropsType> = ({
    onSubmit,
    disabled,
    children,
    buttonText,
}) => {
    const { t } = useTranslation();

    return (
        <Box
            component="form"
            noValidate
            onSubmit={onSubmit}
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
            }}
        >
            {children}
            <Button type="submit" variant="contained" disabled={disabled}>
                {t(buttonText)}
            </Button>
        </Box>
    );
};

export default CollectionFormWrapper;
