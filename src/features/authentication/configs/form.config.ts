import { SignFormTypes } from './enums.config';
import { AppRoutes } from '../../../configs/routes.config';
import { SignFormConfigType } from '../types/common.types';

export const signFormConfig: {
    [key in SignFormTypes]: SignFormConfigType;
} = {
    [SignFormTypes.signIn]: {
        title: 'Login',
        link: {
            text: "Don't have an account?",
            name: 'Register',
            route: AppRoutes.singUp,
        },
    },
    [SignFormTypes.signUp]: {
        title: 'Register',
        link: {
            text: 'Already have an account?',
            name: 'Log in',
            route: AppRoutes.signIn,
        },
    },
};
