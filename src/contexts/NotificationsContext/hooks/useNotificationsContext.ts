import { useContext } from 'react';
import NotificationsContext from '../context/NotificationsContext';
import { NotificationsContextType } from '../types/common.types';

export const useNotificationsContext = (): NotificationsContextType => {
    const contextValue = useContext(NotificationsContext);
    return { ...(contextValue as NotificationsContextType) };
};
