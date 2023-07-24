import { FC, useEffect } from 'react';
import { useTypedDispatch } from '../../../store/store';
import { useSearchMutation } from '../store/search.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import { useNotificationsContext } from '../../../contexts/NotificationsContext';
import ButtonWithIcon from '../../../components/ButtonWithIcon';
import { Box, InputBase } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { useTranslation } from 'react-i18next';
import {
    searchFormDefaultValue,
    searchFormValidationSchema,
    searchInputConfig,
} from '../configs/common.config';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { getHookFormConfig } from '../../../configs/hookForm.config';
import {
    resetSearchState,
    setSearchResult,
} from '../../../store/searchResult/searchResultSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../configs/routes.config';

export const SearchBar: FC = () => {
    const { t } = useTranslation();

    const dispatch = useTypedDispatch();

    const navigate = useNavigate();

    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<FieldValues>(
        getHookFormConfig<FieldValues>(
            searchFormValidationSchema,
            searchFormDefaultValue
        )
    );

    const { apiError, handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [search, { isLoading }] = useSearchMutation();

    const { openErrorNotification } = useNotificationsContext();

    const handleRedirect = () => {
        if (location.pathname !== AppRoutes.search) {
            navigate(AppRoutes.search);
        }
    };

    const resetStates = () => {
        resetApiError();
        handleRedirect();
        dispatch(resetSearchState(true));
    };

    const handleSearch: SubmitHandler<FieldValues> = async (data) => {
        try {
            resetStates();
            const result = await search(data.query).unwrap();
            dispatch(setSearchResult(result));
        } catch (err) {
            handleBaseQueryError(err);
            dispatch(resetSearchState(false));
        }
    };

    useEffect(() => {
        if (apiError) {
            openErrorNotification(apiError);
        }
    }, [apiError, openErrorNotification]);

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(handleSearch)}
            sx={{
                px: 0.5,
                py: 0.15,
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                bgcolor: ({ palette }) => alpha(palette.common.white, 0.25),
                '&:hover': {
                    backgroundColor: ({ palette }) =>
                        alpha(palette.common.white, 0.35),
                },
                borderRadius: 1,
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, color: 'white' }}
                placeholder={t(searchInputConfig.placeholder)}
                inputProps={searchInputConfig.inputProps}
                {...register(searchInputConfig.name)}
            />
            <ButtonWithIcon
                icon={SearchIcon}
                isSubmit={true}
                disabled={isLoading || !isValid}
                color="inherit"
            />
        </Box>
    );
};
