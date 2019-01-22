import moment from 'moment';
import { 
  setStartDate, 
  setEndDate, 
  setTextFilter, 
  sortByAmount, 
  sortByDate 
} from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test ('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should generate set text filter with text', () => {
  const action = setTextFilter('paragvaj');
  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text: 'paragvaj'
  })
});

test('should generate set tex filter without text', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER', 
    text: ''
  })
});

test('should generate sort by date filter ', () => {
 const action = sortByDate();
 expect(action).toEqual({
   type: 'SORT_BY_DATE',
 })
});

test('should generate sort by amount filter', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
});
