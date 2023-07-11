import { AppRoutes } from '../../../configs/routes.config';
import { SignFormTypes } from './enums.config';

export const SignRedirectionConfig = {
    [SignFormTypes.signIn]: AppRoutes.main,
    [SignFormTypes.signUp]: AppRoutes.signIn,
};
