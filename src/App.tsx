import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import PrivateRoutes from './components/PrivateRoutes';
import MainPage from './pages/Main.page';
import ProfilePage from './pages/Profile.page';
import SignInPage from './pages/SignIn.page';
import SignUnPage from './pages/SignUp.page';
import { ColorThemeContextProvider } from './features/theme';
import { AuthorizationContextProvider } from './features/authorization';
import { appRoutes } from './configs/routes.config';

const App: FC = () => {
    return (
        <AuthorizationContextProvider>
            <ColorThemeContextProvider>
                <PageWrapper>
                    <Routes>
                        <Route path={appRoutes.main} element={<MainPage />} />
                        <Route element={<PrivateRoutes />}>
                            <Route
                                path={appRoutes.currentUser}
                                element={<ProfilePage />}
                            />
                        </Route>
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
                </PageWrapper>
            </ColorThemeContextProvider>
        </AuthorizationContextProvider>
    );
};

export default App;
