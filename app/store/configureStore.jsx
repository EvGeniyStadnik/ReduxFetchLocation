let redux = require('redux');
let thunk = require('redux-thunk').default;
let {nameReducer, hobbyReducer, movieReducer, mapReducer} = require('./../reducers/index');

export let configure = () => {
    let reducer = redux.combineReducers({
        name: nameReducer,
        hobby: hobbyReducer,
        movie: movieReducer,
        map: mapReducer
    });

    let store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};