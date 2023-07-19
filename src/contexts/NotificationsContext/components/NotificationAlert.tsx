import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Snackbar, Slide, SlideProps } from '@mui/material';
import { NotificationAlertPropsType } from '../types/common.types';

const TransitionUp = (props: SlideProps) => <Slide {...props} direction="up" />;

const NotificationAlert: FC<NotificationAlertPropsType> = ({
    message,
    isOpen,
    handleClose,
    variant,
    autoHide = true,
}) => {
    const { t } = useTranslation();

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={autoHide ? 5000 : null}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            TransitionComponent={TransitionUp}
        >
            <Alert
                onClose={handleClose}
                severity={variant}
                sx={{ width: '100%' }}
            >
                {t(message)}
            </Alert>
        </Snackbar>
    );
};

export default NotificationAlert;
