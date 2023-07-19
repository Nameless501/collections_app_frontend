import { FC, useCallback, useState } from 'react';
import NotificationsContext from '../context/NotificationsContext';
import { ChildrenPropsType } from '../../../types/props.types';
import NotificationAlert from './NotificationAlert';
import { NotificationVariants } from '../types/common.types';

export const NotificationsContextProvider: FC<ChildrenPropsType> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [message, setMessage] = useState<string>('Message');

    const [variant, setVariant] = useState<NotificationVariants>(
        NotificationVariants.error
    );

    const handleClose = () => setIsOpen(false);

    const handleOpenNotification = useCallback(
        (message: string, variant: NotificationVariants) => {
            setIsOpen(true);
            setMessage(message);
            setVariant(variant);
        },
        []
    );

    const openErrorNotification = useCallback(
        (message: string) =>
            handleOpenNotification(message, NotificationVariants.error),
        [handleOpenNotification]
    );

    const openSuccessNotification = useCallback(
        (message: string) =>
            handleOpenNotification(message, NotificationVariants.success),
        [handleOpenNotification]
    );

    return (
        <NotificationsContext.Provider
            value={{ openErrorNotification, openSuccessNotification }}
        >
            {children}
            <NotificationAlert
                isOpen={isOpen}
                message={message}
                handleClose={handleClose}
                variant={variant}
            />
        </NotificationsContext.Provider>
    );
};
