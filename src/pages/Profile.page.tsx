import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useTypedSelector, useTypedDispatch } from '../store/store';
import { updateUserData } from '../store/user/userSlice';
import { updateUsersData } from '../store/allUsers/allUsersSlice';
import { ProfileForm, ProfileFormTypes } from '../features/profile';
import FlexCenterWrapper from '../components/FlexCenterWrapper';
import { IUser } from '../types/slices.types';
import { ProfilePagePropsType } from '../types/props.types';

const ProfilePage: FC<ProfilePagePropsType> = ({ type }) => {
    const dispatch = useTypedDispatch();

    const { data: currentUser } = useTypedSelector((state) => state.user);

    const { users } = useTypedSelector((state) => state.allUsers);

    const { id } = useParams();

    const findUser = () =>
        users.find((user) => user.id === Number(id)) as IUser;

    const handleStateUpdate = (data: IUser) => {
        if (
            type === ProfileFormTypes.selfProfile ||
            currentUser.id === Number(id)
        ) {
            dispatch(updateUserData(data));
        }
        dispatch(updateUsersData(data));
    };

    return (
        <FlexCenterWrapper>
            <ProfileForm
                user={
                    type === ProfileFormTypes.selfProfile
                        ? currentUser
                        : findUser()
                }
                handleStateUpdate={handleStateUpdate}
            />
        </FlexCenterWrapper>
    );
};

export default ProfilePage;
