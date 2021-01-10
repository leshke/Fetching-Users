import { usersAPI } from "../api/api";

const SET_USERS = 'SET_USERS';
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER';
const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

let initialState = {
    users: [],
    isFetching: false,
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FAVORITE:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id && !user.favourite) {
                        return { ...user, favourite: true }
                    }
                    else if (user.id === action.id && user.favourite) {
                        return { ...user, favourite: false }
                    }
                    else {
                        return { ...user }
                    }
                })
            }
        default:
            return state
    }
}

//action creators
const setUsers = (users) => ({ type: SET_USERS, users });
const togglePreloader = (isFetching) => ({ type: TOGGLE_PRELOADER, isFetching });
export const toggleFavorite = (id) => ({ type: TOGGLE_FAVORITE, id });

//thunk creators
export const getUsers = (params) => async (dispatch) => {
    dispatch(togglePreloader(true))
    let response = await usersAPI.getUsers(params)
    dispatch(togglePreloader(false))
    dispatch(setUsers(response.data))
}

export default reducerApp;