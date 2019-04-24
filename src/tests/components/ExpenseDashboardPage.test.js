import React from 'react';
import { shallow, configure } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
