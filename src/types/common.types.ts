import { ReactNode } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";
import { appRoutes } from "../configs/routes.config";
import { SignFormTypes } from "../features/authentication";

export type ChildrenPropsType = {
    children: ReactNode;
};

export type NavigationListType = Array<{
    title: string,
    route: appRoutes;
    icon: OverridableComponent<SvgIconTypeMap>;
}>;

export type NavigationPropsType = {
    linksList: NavigationListType;
}

export type SignPageWrapperPropsType = {
    type: SignFormTypes;
} & ChildrenPropsType;