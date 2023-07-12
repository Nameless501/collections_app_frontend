import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import { FormLinkPropsType } from '../types/common.types';

const FormLink: FC<FormLinkPropsType> = ({ config }) => {
    const { t } = useTranslation();

    return (
        <Typography color="text.secondary" variant="body2">
            {t(config.text)}
            &nbsp;
            <Link
                component={RouterLink}
                to={config.route}
                underline="hover"
                variant="subtitle2"
            >
                {t(config.name)}
            </Link>
        </Typography>
    );
};

export default FormLink;
