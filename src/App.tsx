import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import MainPage from './pages/Main.page';
import SignInPage from './pages/SignIn.page';
import SignUnPage from './pages/SignUp.page';
import { appRoutes } from './configs/routes.config';

const App: FC = () => {
    return (
        <Box
            bgcolor={'background.default'}
            color={'text.primary'}
            display="flex"
            flexDirection="column"
        >
            <Header />
            <Container
                maxWidth="xl"
                sx={{ bgcolor: ({ palette }) => palette.grey[200] }}
            >
                <Stack
                    direction="row"
                    spacing={1}
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
    );
};

export default App;
