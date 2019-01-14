import React from 'react';
import expenses from '../selectors/expenses';

const ExpenseListItem = (props) => (
  <div>
      {expenses.description}
      {expenses.amount}
      {expenses.createdAt}
  </div>
);

export default ExpenseListItem;

//export a stateless functional component
//that component will render: 
//  - description
//  - amount
//  -  createdAt value
// thopse three above are props passed in
// use map() - peek in indecision code
// Water bill and Gass bill need to fbe shown on the screen instead of 2 :)
// you have to render many instances of expenseList item here
// fill out the expenseList Item component file