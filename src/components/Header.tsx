import { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { AppBar, Container, Box, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import ProfileInfo from './ProfileInfo';
import { SearchBar } from '../features/search';
import { HeaderPropsType } from '../types/props.types';

const Header: FC<HeaderPropsType> = ({ toggleSideBar }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: { xs: 2, sm: 3, md: 6 },
                        }}
                    >
                        <Logo />
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                gap: 1,
                            }}
                        >
                            <Box sx={{ width: '100%', maxWidth: { sm: 300 } }}>
                                <SearchBar />
                            </Box>
                            {isMobile ? (
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                    onClick={toggleSideBar}
                                >
                                    <MenuIcon />
                                </IconButton>
                            ) : (
                                <ProfileInfo />
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Header;
