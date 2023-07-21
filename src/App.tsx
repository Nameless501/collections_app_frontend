import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PageWrapper from './components/PageWrapper';
import PrivateRoutes from './components/PrivateRoutes';
import AdminRoutes from './components/AdminRoutes';
import MainPage from './pages/Main.page';
import ProfilePage from './pages/Profile.page';
import AdminPanelPage from './pages/AdminPanel.page';
import SignPage from './pages/Sign.page';
import AllCollectionsPage from './pages/AllCollections.page';
import CollectionPage from './pages/Collection.page';
import ItemPage from './pages/Item.page';
import SearchPage from './pages/Search.page';
import { ColorThemeContextProvider } from './features/theme';
import { AuthorizationContextProvider } from './features/authorization';
import { NotificationsContextProvider } from './contexts/NotificationsContext';
import { AppRoutes } from './configs/routes.config';
import { SignFormTypes } from './features/authentication';
import { ProfileFormTypes } from './features/profile';

const App: FC = () => {
    return (
        <AuthorizationContextProvider>
            <ColorThemeContextProvider>
                <PageWrapper>
                    <NotificationsContextProvider>
                        <Routes>
                            <Route
                                path={AppRoutes.main}
                                element={<MainPage />}
                            />
                            <Route element={<PrivateRoutes />}>
                                <Route
                                    path={AppRoutes.currentUser}
                                    element={
                                        <ProfilePage
                                            type={ProfileFormTypes.selfProfile}
                                        />
                                    }
                                />
                            </Route>
                            <Route element={<AdminRoutes />}>
                                <Route
                                    path={AppRoutes.adminPanel}
                                    element={<AdminPanelPage />}
                                />
                                <Route
                                    path={AppRoutes.userData}
                                    element={
                                        <ProfilePage
                                            type={
                                                ProfileFormTypes.otherUserProfile
                                            }
                                        />
                                    }
                                />
                            </Route>
                            <Route
                                path={AppRoutes.allCollections}
                                element={<AllCollectionsPage />}
                            />
                            <Route
                                path={AppRoutes.collectionData}
                                element={<CollectionPage />}
                            />
                            <Route
                                path={AppRoutes.itemData}
                                element={<ItemPage />}
                            />
                            <Route
                                path={AppRoutes.search}
                                element={<SearchPage />}
                            />
                            <Route
                                path={AppRoutes.signIn}
                                element={
                                    <SignPage type={SignFormTypes.signIn} />
                                }
                            />
                            <Route
                                path={AppRoutes.singUp}
                                element={
                                    <SignPage type={SignFormTypes.signUp} />
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <Navigate to={AppRoutes.main} replace />
                                }
                            />
                        </Routes>
                    </NotificationsContextProvider>
                </PageWrapper>
            </ColorThemeContextProvider>
        </AuthorizationContextProvider>
    );
};

export default App;
