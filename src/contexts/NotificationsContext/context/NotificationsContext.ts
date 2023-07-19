import { createContext } from 'react';
import { NotificationsContextType } from '../types/common.types';

const NotificationsContext = createContext<NotificationsContextType | null>(
    null
);

export default NotificationsContext;
