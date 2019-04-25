import React from 'react';
import { shallow, configure } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test ('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});