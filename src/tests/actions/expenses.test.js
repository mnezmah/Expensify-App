import { addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);


beforeEach((done)=>{
  const  expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => done());
});


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense( '12345', {note: 'new note value'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '12345',
    updates: {note: 'new note value'}
  });
});

test ('should setup add Expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
const store = createMockStore({});
const expenseData = {
  description: 'mouse',
  amount: 3000,
  note: 'This one is better',
  createdAt: 1000
};

store.dispatch(startAddExpense(expenseData)).then(()=>{
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });

  return database.ref(`expenses/${actions[0].expense.id}`).once('value');
}).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseDataDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
};

store.dispatch(startAddExpense({})).then(()=>{
  const actions = store.getActions();
  expect(actions[0]).toEqual({
    type: 'ADD_EXPENSE', 
    expense: {
      id: expect.any(String),
      ...expenseDataDefaults
    }
  });

  return database.ref(`expenses/${actions[0].expense.id}`).once('value');
}).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDataDefaults);
    done();
  });
});

test ('should setup setExspense action object wict data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES', 
    expenses
  });
});

test ('should fetch the expenses trom firebase', ()=> {
  const store = createMockStore({});
    store.dispatch(startSetExpenses()).then (() => {
      const actions = store.getActions();
    expect(actions[0]).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
  done();
  });
});
