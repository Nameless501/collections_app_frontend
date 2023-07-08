import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../store/store';
import { appRoutes } from '../configs/routes.config';
import Loader from './Loader';

function PrivateRoutes() {
    const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

    const { isAuthorized, isLoading } = useTypedSelector((state) => state.user);

    useEffect(() => {
        if (!isLoading) {
            setIsAllowed(isAuthorized);
        }
    }, [isAuthorized, isLoading]);

    if (isAllowed === null) return <Loader />;

    return isAllowed ? <Outlet /> : <Navigate to={appRoutes.signIn} />;
}

export default PrivateRoutes;
