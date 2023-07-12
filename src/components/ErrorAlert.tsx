import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert } from '@mui/material';
import { ErrorAlertPropsType } from '../types/props.types';

const ErrorAlert: FC<ErrorAlertPropsType> = ({ error }) => {
    const { t } = useTranslation();

    return <>{error && <Alert severity="error">{t(error)}</Alert>}</>;
};

export default ErrorAlert;
