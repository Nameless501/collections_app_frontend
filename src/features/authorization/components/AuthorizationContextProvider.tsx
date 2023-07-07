import { FC, useEffect } from 'react';
import AuthorizationContext from '../context/AuthorizationContext';
import { useTypedDispatch } from '../../../store/store';
import { useAuthorizationMutation, useSignOutMutation } from '../store/authorization.slice';
import { setUserData, clearUserData } from '../../../store/user/userSlice';
import { ChildrenPropsType } from '../../../types/props.types';

export const AuthorizationContextProvider: FC<ChildrenPropsType> = ({
    children,
}) => {
    const dispatch = useTypedDispatch();

    const [authorize] = useAuthorizationMutation();

    const [signOut] = useSignOutMutation();

    const handleSignOut = async (): Promise<void> => {
        try {
            await signOut({}).unwrap();
            dispatch(clearUserData());
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        authorize({}).unwrap()
            .then(user => dispatch(setUserData(user)))
            .catch((err) => console.log(err));
    }, [authorize, dispatch]);

    return (
        <AuthorizationContext.Provider value={{ handleSignOut }}>
            {children}
        </AuthorizationContext.Provider>
    );
};
