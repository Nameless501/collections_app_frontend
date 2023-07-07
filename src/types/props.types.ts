import { ReactNode } from 'react';
import { NavigationListType } from './common.types';
import { SignFormTypes } from '../features/authentication';

export type ChildrenPropsType = {
    children: ReactNode;
};

export type NavigationPropsType = {
    linksList: NavigationListType;
};

export type ProfileMenuPropsType = {
    linksList: NavigationListType;
    isOpen: boolean;
    anchorEl: HTMLDivElement | null;
    handleClose: () => void;
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
