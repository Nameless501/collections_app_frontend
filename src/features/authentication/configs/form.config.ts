import { SignFormTypes } from './enums.config';
import { AppRoutes } from '../../../configs/routes.config';
import { SignFormConfigType } from '../types/common.types';

export const signFormConfig: {
    [key in SignFormTypes]: SignFormConfigType;
} = {
    [SignFormTypes.signIn]: {
        title: 'sign:title.login',
        link: {
            text: 'sign:link.register.text',
            name: 'sign:link.register.link',
            route: AppRoutes.singUp,
        },
    },
    [SignFormTypes.signUp]: {
        title: 'sign:title.register',
        link: {
            text: 'sign:link.login.text',
            name: 'sign:link.login.link',
            route: AppRoutes.signIn,
        },
    },
};
