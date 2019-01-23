import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1',
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


test('should add an expense', () => {
  const expense=  {
    id: '4',
    description: 'New expense', 
    note: 'moj novi troshak',
    amount: 500,
    createdAt: 25000
  }
  const action =  {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense] );
});

test('should edit an expense', () => {
  const action =  {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates:  {
      note: 'mala izmjena'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('mala izmjena');
});

test('should not edit expense if expense not found', () => {
  const action =  {
    type: ' EDIT_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});