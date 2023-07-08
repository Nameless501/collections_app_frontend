import { ReactNode } from 'react';
import { NavigationListType } from './common.types';
import { SignFormTypes } from '../features/authentication';

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

export type SignPageWrapperPropsType = {
    type: SignFormTypes;
} & ChildrenPropsType;

export type SideBarWrapperPropsType = {
    anchor: 'left' | 'right';
    open: boolean;
    permanent: boolean;
    handleClose?: () => void;
} & ChildrenPropsType;

export type HeaderPropsType = {
    toggleSideBar: () => void;
};
