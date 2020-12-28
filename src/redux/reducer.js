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
                ...state,
                users: action.users.map(item => {
                    let remainder10 = (item.age % 10);
                    let remainder100 = (item.age % 100);

                    if (remainder100 > 10 && remainder100 < 20) {
                        return { ...item, age: item.age + ' лет' }
                    } else if (remainder10 === 1) {
                        return { ...item, age: item.age + ' год' }
                    } else if (remainder10 > 1 && remainder10 < 5) {
                        return { ...item, age: item.age + ' годa' }
                    }
                    return { ...item, age: item.age + ' лет' }
                })
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
export const getUsers = () => async (dispatch) => {
    dispatch(togglePreloader(true))
    let response = await usersAPI.getUsers()
    dispatch(togglePreloader(false))
    dispatch(setUsers(response.data))
}

export const sortByDesk = (type) => async (dispatch) => {
    let response = await usersAPI.sortUsersByDesk(type)
    dispatch(setUsers(response.data))
}

export const sortByAsc = (type) => async (dispatch) => {
    let response = await usersAPI.sortUsersByAsc(type)
    dispatch(setUsers(response.data))
}

export default reducerApp;