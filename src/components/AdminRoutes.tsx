import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useTypedSelector } from '../store/store';
import { AppRoutes } from '../configs/routes.config';
import Loader from './Loader';

function AdminRoutes() {
    const [isAllowed, setIsAllowed] = useState<boolean | null>(null);

    const { data, isAuthorized, isLoading } = useTypedSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (!isLoading) {
            setIsAllowed(isAuthorized && data.isAdmin);
        }
    }, [data, isAuthorized, isLoading]);

    if (isAllowed === null) return <Loader />;

    return isAllowed ? <Outlet /> : <Navigate to={AppRoutes.main} />;
}

export default AdminRoutes;
