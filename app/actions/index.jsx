let axios = require('axios');

export let changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

export let addHobby = (id, hobby) => {
    return {
        type: 'ADD_HOBBY',
        id,
        hobby
    }
};
export let removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
};

export let addMovie = (id, title, genre) => {
    return {
        type: 'ADD_MOVIE',
        id,
        title,
        genre
    }
};
export let removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
};

export let startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH'
    }
};
export let completeLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
};

export let fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch());

        axios.get('http://ipinfo.io/json').then((res) => {
            let loc = res.data.loc;
            let googleUrl = 'http://map.google.com.ua?q=';

            dispatch(completeLocationFetch(googleUrl + loc));
        }, (e) => {
            throw new Error(e.data.message);
        })
    };
};























