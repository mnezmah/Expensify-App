 import { createStore } from 'redux';

//Action geerators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  });

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = () => ({ ming} = {}) => ({
  type: 'SET',
  ming: 55
});

const resetCount = () => ({
  type: 'RESET'
});

//Reducers
// 1. Reducers are pure fnctions
// 2. Never change state or action 
const countReducer = (state= { count: 0 }, action)=> {
  switch (action.type) {
    case 'INCREMENT':
    return  {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return  {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.ming
        };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(()=> {
  console.log(store.getState());
});
 

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount(38));
store.dispatch(resetCount());