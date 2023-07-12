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
import { defaultError } from '../configs/api.config';

export const AuthorizationContextProvider: FC<ChildrenPropsType> = ({
    children,
}) => {
    const dispatch = useTypedDispatch();

    const [authorize, { isLoading, requestId }] = useAuthorizationMutation();

    const [signOut] = useSignOutMutation();

    const handleSignOut = async (): Promise<void> => {
        try {
            await signOut({}).unwrap();
            dispatch(clearUserData());
        } catch (err) {
            console.log(defaultError);
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
