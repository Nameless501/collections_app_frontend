import { ReactNode, ElementType, SyntheticEvent } from 'react';
import {
    Control,
    FieldError,
    FieldValues,
    UseFormRegister,
} from 'react-hook-form';
import {
    ColorOptions,
    NavigationListType,
    PageTabsType,
    SelectConfigType,
    SizeOptions,
} from './common.types';
import { SignFormTypes } from '../features/authentication';
import { ProfileFormTypes } from '../features/profile';
import { SxProps } from '@mui/material';
import {
    CollectionPageTabs,
    ProfilePageTabs,
} from '../configs/navigation.config';

export type ChildrenPropsType = {
    children: ReactNode;
};

export type FlexCenterPropsType = {
    align?: 'space-between' | 'flex-start' | 'center';
} & ChildrenPropsType;

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

export type FormWrapperPropsType = {
    onSubmit: () => void;
    disabled: boolean;
    buttonText: string;
} & ChildrenPropsType;

export type DialogFormWrapperPropsType = {
    handleClose: () => void;
    isOpen: boolean;
} & ChildrenPropsType;

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
    color?: ColorOptions;
    isSubmit?: boolean;
};

export type CustomFabPropsType = {
    tooltip?: string;
    icon: ReactNode;
    isLink?: boolean;
    link?: string;
    handleClick?: (param: unknown) => unknown;
    disabled?: boolean;
    size?: SizeOptions;
    color?: ColorOptions;
    sx?: SxProps;
};

export type FormInputPropsType = {
    label: string;
    error?: FieldError;
    name: string;
    register: UseFormRegister<FieldValues>;
    type?: string;
    multiline?: boolean;
    rows?: number;
};

export type PageTabsWrapperPropsType = {
    currentTab: number;
    handleTabChange: (_evt: SyntheticEvent, newValue: number) => void;
    config: PageTabsType<CollectionPageTabs | ProfilePageTabs>;
} & ChildrenPropsType;

export type ControlledSelectPropsType = {
    multiple: boolean;
    control: Control;
    size?: 'small' | 'medium';
    config: SelectConfigType;
};
