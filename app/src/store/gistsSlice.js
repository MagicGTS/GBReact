import { createSlice } from "@reduxjs/toolkit";

const GET_GISTS = 'GISTS::GET_GISTS';

export const API_URL_PUBLIC = "https://api.github.com/gists/public";

export const GET_GISTS_REQUEST = "GISTS::GET_GISTS_REQUEST";
export const GET_GISTS_SUCCESS = "GISTS::GET_GISTS_SUCCESS";
export const GET_GISTS_FAILURE = "GISTS::GET_GISTS_FAILURE";
export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILURE: 3,
}
const initialState = {
    articles: [],
    request: STATUSES.IDLE,
    error: null,
    loading: false,
};
export const gistsSlice = createSlice({
    name: "gists",
    initialState: initialState,
    reducers: {
        getGistsRequest: (state) => {
            return {
                ...state,
                request: STATUSES.REQUEST,
                loading: true,
            };
        },
        getGistsSuccess: (state, action) => {
            return {
                ...state,
                articles: action.payload,
                request: STATUSES.SUCCESS,
                loading: false,
            };
        },
        getGistsFailure: (state, action) => {
            return {
                ...state,
                request: STATUSES.FAILURE,
                error: action.payload,
                loading: false,
            };
        },
    },
});
export function selectGists() {
    return (state) => state.gists.articles
}
export function selectGistsError() {
    return (state) => state.gists.error
}
export function selectGistsLoading() {

    return (state) => state.gists.loading
}
export const { getGistsRequest, getGistsSuccess, getGistsFailure } = gistsSlice.actions
export default gistsSlice.reducer;
