import { useSelector, useDispatch } from 'react-redux'
import { selectGists, selectGistsError, selectGistsLoading } from '../store/gistsSlice.js'
import { getAllGists } from '../store/gistsMiddleware.js'
import React, { useCallback, useEffect } from "react";
import { CircularProgress } from '@mui/material';

function GistsList() {
    const dispatch = useDispatch();
    const gists = useSelector(selectGists());
    const error = useSelector(selectGistsError());
    const loading = useSelector(selectGistsLoading());
    const requestGists = () => {
        dispatch(getAllGists());
    };
    useEffect(() => {
        requestGists();
    }, []);
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );
    if (loading) {
        return <CircularProgress />;
    }
    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        );
    }
    return <ul>{gists.map(renderGist)}</ul>;
};
export default GistsList;