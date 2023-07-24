import { useTypedDispatch } from '../../../store/store';
import { useSearchByTagMutation } from '../store/search.slice';
import { errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';
import {
    resetSearchState,
    setSearchResult,
} from '../../../store/searchResult/searchResultSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../configs/routes.config';

export function useSearchByTag() {
    const dispatch = useTypedDispatch();

    const navigate = useNavigate();

    const location = useLocation();

    const { handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const [search] = useSearchByTagMutation();

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

    const handleSearchByTag = async (id: number) => {
        try {
            resetStates();
            const result = await search(id).unwrap();
            dispatch(setSearchResult(result));
        } catch (err) {
            handleBaseQueryError(err);
            dispatch(resetSearchState(false));
        }
    };

    return {
        handleSearchByTag,
    };
}
