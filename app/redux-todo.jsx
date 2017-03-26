let redux = require('redux');

console.log('Starting todo redux example');

let stateDefault = {
    searchText: '',
    showCompleted: false,
    todos: [],
    data: {
        name: 'Vasily',
        isAdmin: false
    }
};

let reducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.todo
                ]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                showCompleted: action.showCompleted
            };
        case 'ADD_DATA':
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.data
                }
            };
        case 'ADD_NAME_TO_DATA':
            return {
                ...state,
                data: {
                    ...state.data,
                    name: action.name
                }
            };
        default:
            return state;
    }
};

let store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

let unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('state after update: ', state);
    document.getElementById('app').innerHTML = state.searchText;
});

let currentState = store.getState();

console.log('currentState before update: ', currentState);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'new text'
});
//unsubscribe();
store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'new text 2'
});
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        text: 'new todo',
        createdAt: 123234234,
        id: 23
    }
});
store.dispatch({
    type: 'ADD_TODO',
    todo: {
        text: 'new todo2',
        createdAt: 45243523,
        id: 24
    }
});
store.dispatch({
    type: 'TOGGLE_COMPLETED',
    showCompleted: true
});
store.dispatch({
    type: 'ADD_DATA',
    data: {
        name: 'Dmitry',
        isAdmin: true
    }
});
store.dispatch({
    type: 'ADD_NAME_TO_DATA',
    name: 'Eveniy'
});