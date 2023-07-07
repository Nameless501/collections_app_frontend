import { FC } from 'react';
import { Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import { appRoutes } from '../configs/routes.config';

const Logo: FC = () => {
    return (
        <Link
            component={RouterLink}
            to={appRoutes.main}
            sx={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
            }}
            color="inherit"
        >
            <WallpaperIcon fontSize="large" />
            <Typography
                variant="h5"
                sx={{ display: { xs: 'none', md: 'block' } }}
            >
                Logo
            </Typography>
        </Link>
    );
};

export default Logo;
