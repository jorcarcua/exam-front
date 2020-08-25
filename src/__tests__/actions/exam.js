import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { createMemoryHistory } from 'history';
import * as types from '../../constants/actionTypes';
import { examActions } from '../../actions';

const BASE_URL = process.env.REACT_APP_SERVER;

const initialState = {
  list: [],
  inProgress: false,
};

const history = createMemoryHistory('/');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('get exams', () => {
    fetchMock.getOnce(`${BASE_URL}exams/`, {
      body: [{ title: 'exam prueba' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.START_ASYNC_EXAM },
      { type: types.RECEIVE_EXAMS, exams: [{ title: 'exam prueba' }] },
    ];
    const store = mockStore(initialState);

    return store.dispatch(examActions.getExams()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('add exam', () => {
    const history = createMemoryHistory('/');
    const newExam = {
      _id: 1,
      title: 'new exam',
    };
    fetchMock.postOnce(`${BASE_URL}exams`, {
      body: newExam,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.START_ASYNC_EXAM },
      { type: types.ADD_EXAM, exam: newExam },
    ];
    const store = mockStore(initialState);

    return store
      .dispatch(examActions.handleAddExam(newExam, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('edit exam', () => {
    const initialState = {
      list: [
        {
          _id: 1,
          title: 'first title',
        },
        {
          _id: 2,
          title: 'second title',
        },
      ],
      inProgress: false,
    };
    const examEdited = {
      id: 1,
      title: 'edited exam',
    };

    const examReturned = {
      _id: 1,
      title: 'edited exam',
    };

    fetchMock.putOnce(`${BASE_URL}exams/1`, {
      body: examReturned,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.START_ASYNC_EXAM },
      { type: types.EDIT_EXAM, exam: examReturned },
    ];
    const store = mockStore(initialState);

    return store
      .dispatch(examActions.handleEditExam(examEdited, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('delete exam', () => {
    const initialState = {
      list: [
        {
          _id: 1,
          title: 'first title',
        },
        {
          _id: 2,
          title: 'second title',
        },
      ],
      inProgress: false,
    };

    const examReturned = {
      _id: 1,
      title: 'edited exam',
    };

    fetchMock.deleteOnce(`${BASE_URL}exams/1`, {
      body: examReturned,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: types.START_ASYNC_EXAM },
      { type: types.DELETE_EXAM, id: 1 },
    ];
    const store = mockStore(initialState);

    return store.dispatch(examActions.handleDeleteExam(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
