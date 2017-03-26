let redux = require('redux');

console.log('Starting redux example');

let actions = require('./actions/index');
let store = require('./store/configureStore').configure();

//Subscribe to changes
let unsubsribe = store.subscribe(() => {
    let state = store.getState();

    if(state.map.isFetching){
        document.getElementById('app').innerHTML = "Loading...";
    } else if(state.map.url){
        document.getElementById('app').innerHTML = "<a target='_blank' href='"+ state.map.url +"'>View Your Location</a>"
    }

    console.log('newState: ', store.getState());
});

let  currentState = store.getState();
console.log('currentState: ', currentState); //currentState: {name: "Default"}

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Evgeniy'));

store.dispatch(actions.addHobby(1, 'Running'));
store.dispatch(actions.addHobby(2, 'Walking'));

store.dispatch(actions.removeHobby(2));
//unsubsribe(); //dispatch after will not fired
store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie(1, 'Forsage', 'Action'));
store.dispatch(actions.addMovie(2, 'Arrival', 'Fantastic'));
store.dispatch(actions.removeMovie(2));

