import { createContext } from 'react';
import { AuthorizationContextValueType } from '../types/authorization.types';

const AuthorizationContext = createContext<AuthorizationContextValueType | null>(null);

export default AuthorizationContext;
