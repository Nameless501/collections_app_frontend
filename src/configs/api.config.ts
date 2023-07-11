export enum ApiMethods {
    get = 'GET',
    post = 'POST',
    patch = 'PATCH',
    put = 'PUT',
    delete = 'DELETE',
}

export enum ApiRoutes {
    signIn = '/authentication/sign-in',
    signUp = '/authentication/sign-up',
    signOut = '/authentication/sign-out',
    currentUser = '/users/me',
    allUsers = '/users/',
    updateUser = '/users/',
    updateUsersRole = '/users/role',
    deleteUser = '/users/',
}
