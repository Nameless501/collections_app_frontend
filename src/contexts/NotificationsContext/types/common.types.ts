export enum NotificationVariants {
    error = 'error',
    success = 'success',
}

export type NotificationAlertPropsType = {
    isOpen: boolean;
    handleClose: () => void;
    message: string;
    variant: NotificationVariants;
    autoHide?: boolean;
};

export type NotificationsContextType = {
    openErrorNotification: (message: string) => void;
    openSuccessNotification: () => void;
};
