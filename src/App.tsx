import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainPage from './pages/Main.page';
import SignInPage from './pages/SignIn.page';
import SignUnPage from './pages/SignUp.page';
import { ColorThemeContextProvider } from './features/theme';
import { appRoutes } from './configs/routes.config';

const App: FC = () => {
    return (
        <ColorThemeContextProvider>
            <Box
                bgcolor={(theme) => theme.custom.background}
                color={'text.primary'}
                display="flex"
                flexDirection="column"
            >
                <Header />
                <Container
                    maxWidth="xl"
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        sx={{ pt: 10, minHeight: '100vh' }}
                    >
                        <Sidebar />
                        <Routes>
                            <Route path={appRoutes.main} element={<MainPage />} />
                            <Route
                                path={appRoutes.signIn}
                                element={<SignInPage />}
                            />
                            <Route
                                path={appRoutes.singUp}
                                element={<SignUnPage />}
                            />
                            <Route
                                path="*"
                                element={<Navigate to={appRoutes.main} replace />}
                            />
                        </Routes>
                    </Stack>
                </Container>
            </Box>
        </ColorThemeContextProvider>
    );
};

export default App;
