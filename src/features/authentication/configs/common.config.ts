import { appRoutes } from "../../../configs/routes.config";
import { SignFormTypes } from "./enums.config";

export const SignRedirectionConfig = {
    [SignFormTypes.signIn]: appRoutes.main,
    [SignFormTypes.signUp]: appRoutes.signIn,
}