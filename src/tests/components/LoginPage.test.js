import React from 'react';
import { shallow, configure } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test ('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
<<<<<<< HEAD
=======
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
>>>>>>> 314442f1bb91add33cd0a720d0a80d9dd71895d8
});