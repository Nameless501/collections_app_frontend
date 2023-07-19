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
    updateUser = '/users/:id',
    userData = '/users/:id',
    updateUsersRole = '/users/role',
    deleteUser = '/users/',
    userCollections = '/users/:id/collections',
    collectionData = '/collections/:id/',
    updateCollection = '/collections/:id/',
    allCollections = '/collections/',
    topCollections = '/collections/top',
    deleteCollection = '/collections/',
    createCollection = '/collections/new',
    createCollectionFields = '/collections/:id/fields',
    updateCollectionFields = '/fields/:id',
    deleteCollectionFields = '/fields/',
}
