import { useContext } from 'react';
import AuthorizationContext from '../context/AuthorizationContext';
import { AuthorizationContextValueType } from '../types/authorization.types';

export const useAuthorizationContext = (): AuthorizationContextValueType => {
    const contextValue = useContext(AuthorizationContext);
    return { ...(contextValue as AuthorizationContextValueType) };
};
