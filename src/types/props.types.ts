import { ReactNode, ElementType } from 'react';
import { NavigationListType } from './common.types';
import { SignFormTypes } from '../features/authentication';
import { ProfileFormTypes } from '../features/profile';

export type ChildrenPropsType = {
    children: ReactNode;
};

export type ProfileMenuPropsType = {
    isOpen: boolean;
    anchorEl: HTMLDivElement | null;
    handleClose: () => void;
} & ChildrenPropsType;

export type LinksListPropsType = {
    linksList: NavigationListType;
    fontSize?: number;
    iconWidth?: string;
};

export type UserAvatarPropsType = {
    isAdmin?: boolean;
    size?: number;
    fontSize?: number;
    name?: string;
};

export type SignOutButtonPropsType = {
    fontSize?: number;
    iconWidth?: string;
};

export type SideBarWrapperPropsType = {
    anchor: 'left' | 'right';
    open: boolean;
    permanent: boolean;
    handleClose?: () => void;
} & ChildrenPropsType;

export type HeaderPropsType = {
    toggleSideBar: () => void;
};

export type SignPagePropsType = {
    type: SignFormTypes;
};

export type ProfilePagePropsType = {
    type: ProfileFormTypes;
};

export type ButtonWithIconProps = {
    tooltip?: string;
    icon: ElementType;
    isLink?: boolean;
    link?: string;
    handleClick?: (param: unknown) => unknown;
    disabled?: boolean;
    large?: boolean;
};
