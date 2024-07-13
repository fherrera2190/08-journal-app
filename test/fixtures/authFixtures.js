export const initialState={
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null

}

export const authenticatedState={
    status: 'authenticated',
    uid: '123',
    email: 'i8s2K@example.com',
    displayName: 'Test Name',
    photoURL: 'https://urlphototest.com',
    errorMessage: null
}

export const notAuthenticatedState={
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}   

export const demoUser={
    uid: '123',
    email: 'i8s2K@example.com',
    displayName: 'Test Name',
    photoURL: 'https://urlphototest.com',
}