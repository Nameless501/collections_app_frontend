import { AppRoutes } from '../../../configs/routes.config';
import { SignFormTypes } from './enums.config';

export const signRedirectionConfig = {
    [SignFormTypes.signIn]: AppRoutes.main,
    [SignFormTypes.signUp]: AppRoutes.signIn,
};

export const errorsConfig = {
    409: 'errors:http.emailConflict',
    401: 'errors:http.wrongCredentials',
    500: 'errors:default',
};
