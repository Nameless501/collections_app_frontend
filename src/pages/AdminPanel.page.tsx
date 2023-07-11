import { FC } from 'react';
import { AdminPanel } from '../features/adminPanel';
import FlexCenterWrapper from '../components/FlexCenterWrapper';

const AdminPanelPage: FC = () => {
    return (
        <FlexCenterWrapper>
            <AdminPanel />
        </FlexCenterWrapper>
    );
};

export default AdminPanelPage;
