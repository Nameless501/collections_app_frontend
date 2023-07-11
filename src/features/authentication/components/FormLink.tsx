import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@mui/material';
import { FormLinkPropsType } from '../types/common.types';

const FormLink: FC<FormLinkPropsType> = ({ config }) => {
    return (
        <Typography color="text.secondary" variant="body2">
            {config.text}
            &nbsp;
            <Link
                component={RouterLink}
                to={config.route}
                underline="hover"
                variant="subtitle2"
            >
                {config.name}
            </Link>
        </Typography>
    );
};

export default FormLink;
