import { FC, useEffect } from 'react';
import AuthorizationContext from '../context/AuthorizationContext';
import { useTypedDispatch } from '../../../store/store';
import {
    useAuthorizationMutation,
    useSignOutMutation,
} from '../store/authorization.slice';
import {
    setUserData,
    clearUserData,
    setIsLoading,
} from '../../../store/user/userSlice';
import { ChildrenPropsType } from '../../../types/props.types';
import { defaultError, errorsConfig } from '../configs/api.config';
import useBaseQueryError from '../../../hooks/useBaseQueryError';

export const AuthorizationContextProvider: FC<ChildrenPropsType> = ({
    children,
}) => {
    const dispatch = useTypedDispatch();

    const [authorize, { isLoading, requestId }] = useAuthorizationMutation();

    const [signOut] = useSignOutMutation();

    const { handleBaseQueryError, resetApiError } =
        useBaseQueryError(errorsConfig);

    const handleSignOut = async (): Promise<void> => {
        try {
            resetApiError();
            await signOut({}).unwrap();
            dispatch(clearUserData());
        } catch (err) {
            handleBaseQueryError(err);
        }
    };

    useEffect(() => {
        authorize({})
            .unwrap()
            .then((user) => dispatch(setUserData(user)))
            .catch(() => console.log(defaultError));
    }, [authorize, dispatch]);

    useEffect(() => {
        if (requestId) {
            dispatch(setIsLoading(isLoading));
        }
    }, [isLoading, dispatch, requestId]);

    return (
        <AuthorizationContext.Provider value={{ handleSignOut }}>
            {children}
        </AuthorizationContext.Provider>
    );
};
