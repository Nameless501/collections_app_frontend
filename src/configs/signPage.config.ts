import { SignFormTypes } from "../features/authentication";
import { appRoutes } from "./routes.config";

export const signPageConfig = {
    [SignFormTypes.signIn]: {
        title: 'Login',
        link: {
            text: "Don't have an account?",
            name: 'Register',
            route: appRoutes.singUp,
        }
    },
    [SignFormTypes.signUp]: {
        title: 'Register',
        link: {
            text: 'Already have an account?',
            name: 'Log in',
            route: appRoutes.signIn,
        }
    }
};