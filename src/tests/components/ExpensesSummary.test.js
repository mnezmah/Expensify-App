import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../ExpensesSummary/';

let wrapper, expenseCount, expensesTotal;

test('should corectly render expenseSummary with 1 expense', () => {
  wrapper = shallow(<ExpensesSummary  expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should corectly render expenseSummary with multiple expenses', () => {
  wrapper = shallow(<ExpensesSummary  expenseCount={5} expensesTotal={2358}/>);
  expect(wrapper).toMatchSnapshot();
});

