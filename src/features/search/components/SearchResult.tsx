import { FC } from 'react';
import { useTypedSelector } from '../../../store/store';
import { Alert, Box, Typography } from '@mui/material';
import { ItemsList } from '../../items';
import Loader from '../../../components/Loader';
import { useTranslation } from 'react-i18next';
import { searchResultConfig } from '../configs/common.config';

export const SearchResult: FC = () => {
    const { t } = useTranslation();

    const { results, isEmptyResult, isLoading } = useTypedSelector(
        (store) => store.searchResult
    );

    return (
        <Box
            sx={{
                mt: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
            }}
        >
            <Typography variant="h5" textAlign="center">
                {t(searchResultConfig.title)}
            </Typography>
            {results.length > 0 && <ItemsList items={results} />}
            {isLoading && (
                <Box
                    sx={{
                        mt: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Loader />
                </Box>
            )}
            {isEmptyResult && (
                <Alert severity="warning" sx={{ mt: 5 }}>
                    {t(searchResultConfig.warning)}
                </Alert>
            )}
        </Box>
    );
};
