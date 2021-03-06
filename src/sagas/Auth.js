import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {
    auth,
    facebookAuthProvider,
    githubAuthProvider,
    googleAuthProvider,
    twitterAuthProvider
} from 'firebase/firebase';
import http from '../services/api';
import {
    SIGNIN_FACEBOOK_USER,
    SIGNIN_GITHUB_USER,
    SIGNIN_GOOGLE_USER,
    SIGNIN_TWITTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER
} from 'constants/ActionTypes';
import { showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess } from 'actions/Auth';
import {
    userFacebookSignInSuccess,
    userGithubSignInSuccess,
    userGoogleSignInSuccess,
    userTwitterSignInSuccess
} from '../actions/Auth';
import { ADMIN_CREDENTIALS, ADMIN_USER_NAME } from '../../secrets_config';
import { REGULAR_USER } from '../constants/UserTypes';
import { config } from '../services/helper';

const getUser = async (loggedUser) => {
    return http.post('/TokenAuth/Authenticate', {
        userNameOrEmailAddress: ADMIN_USER_NAME,
        password: ADMIN_CREDENTIALS,
        rememberClient: true,
    }).then(authUser => {
        return http.get('/services/app/User/Get', config(authUser.data.result.accessToken,
            loggedUser.data.result.userId)
        ).then(user => {
            localStorage.setItem('user', user.data.result.emailAddress);
            return user;
        })
            .catch(error => console.log(error))
    })
        .catch(error => {
            return { Error: 'Authentication failed: check email and password', details: error }
        });
}
const createUserWithEmailPasswordRequest = async (email, password, name) => {
    return http.post('/TokenAuth/Authenticate', {
        userNameOrEmailAddress: ADMIN_USER_NAME,
        password: ADMIN_CREDENTIALS,
        rememberClient: true,
    })
        .then(authUser => {
            return http.post('/services/app/User/Create', {
                userName: name,
                name,
                surname: name,
                emailAddress: email,
                isActive: true,
                roleNames: [
                    REGULAR_USER
                ],
                "password": password
            }, config(authUser.data.result.accessToken)
            ).then(user => user)
                .catch(error => console.log(error))
        })
        .catch(error => {
            return { Error: 'Authentication failed: check email and password', details: error }
        });
}
const signInUserWithEmailPasswordRequest = async (email, password) => {
    return http.post('/TokenAuth/Authenticate', {
        userNameOrEmailAddress: email,
        password,
        rememberClient: true,
    })
        .then(authUser => {
            localStorage.setItem('token', authUser.data.result.accessToken);
            return getUser(authUser)
        })
        .then(user => user)
        .catch(error => {
            return { Error: 'Authentication failed: check email and password', details: error }
        });

}


const signOutRequest = async () =>
    await auth.signOut()
        .then(authUser => authUser)
        .catch(error => error);


function* createUserWithEmailPassword({ payload }) {
    const { email, password, name } = payload;
    try {
        const signUpUserData = yield call(createUserWithEmailPasswordRequest, email, password, name);
        if (!signUpUserData.data) {
            yield put(showAuthMessage('Error: Email while creating account'));
        } else {
            localStorage.setItem('user', signUpUserData.data.result.userName);
            yield put(userSignUpSuccess(signUpUserData.data));
        }
    } catch (error) {
        yield put(showAuthMessage('Error creating the user, email or username may be already used, also username sould be lower case, with no spaces'));
    }
}

const signInUserWithGoogleRequest = async () =>
    await auth.signInWithPopup(googleAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithFacebookRequest = async () =>
    await auth.signInWithPopup(facebookAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithGithubRequest = async () =>
    await auth.signInWithPopup(githubAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);

const signInUserWithTwitterRequest = async () =>
    await auth.signInWithPopup(twitterAuthProvider)
        .then(authUser => authUser)
        .catch(error => error);


function* signInUserWithGoogle() {
    try {
        const signUpUser = yield call(signInUserWithGoogleRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(userGoogleSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithFacebook() {
    try {
        const signUpUser = yield call(signInUserWithFacebookRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(userFacebookSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithGithub() {
    try {
        const signUpUser = yield call(signInUserWithGithubRequest);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(userGithubSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}


function* signInUserWithTwitter() {
    try {
        const signUpUser = yield call(signInUserWithTwitterRequest);
        if (signUpUser.message) {
            if (signUpUser.message.length > 100) {
                yield put(showAuthMessage('Your request has been canceled.'));
            } else {
                yield put(showAuthMessage(signUpUser.message));
            }
        } else {
            localStorage.setItem('user_id', signUpUser.uid);
            yield put(userTwitterSignInSuccess(signUpUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signInUserWithEmailPassword({ payload }) {
    const { email, password } = payload;
    try {
        const signInUser = yield call(signInUserWithEmailPasswordRequest, email, password);
        if (signInUser.data) {
            localStorage.setItem('user_id', signInUser.data.result.userId);
            localStorage.setItem('accessToken', signInUser.data.result.accessToken);
            yield put(userSignInSuccess(signInUser));
        }
        if (signInUser.Error) {
            yield put(showAuthMessage(signInUser.Error));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        if (signInUser.message) {
            yield put(showAuthMessage(signInUser.message));
        } else {
            localStorage.removeItem('user_id');
            yield put(userSignOutSuccess(signInUser));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInWithGoogle() {
    yield takeEvery(SIGNIN_GOOGLE_USER, signInUserWithGoogle);
}

export function* signInWithFacebook() {
    yield takeEvery(SIGNIN_FACEBOOK_USER, signInUserWithFacebook);
}

export function* signInWithTwitter() {
    yield takeEvery(SIGNIN_TWITTER_USER, signInUserWithTwitter);
}

export function* signInWithGithub() {
    yield takeEvery(SIGNIN_GITHUB_USER, signInUserWithGithub);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export default function* rootSaga() {
    yield all([fork(signInUser),
    fork(createUserAccount),
    fork(signInWithGoogle),
    fork(signInWithFacebook),
    fork(signInWithTwitter),
    fork(signInWithGithub),
    fork(signOutUser)]);
}
