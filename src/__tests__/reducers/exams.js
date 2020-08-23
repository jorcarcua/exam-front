import * as types from '../../constants/actionTypes';
import exams from '../../reducers/exams';

const initialEmpty = {
  list: [],
  inProgress: false,
};

const examList = {
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

describe('exams reducer', () => {
  it('should return initial state', () => {
    expect(exams(undefined, {})).toEqual(initialEmpty);
  });

  it('should handle ADD_EXAM', () => {
    const newExam = {
      id: 3,
      title: 'third title',
    };

    expect(
      exams(initialEmpty, {
        type: types.ADD_EXAM,
        exam: newExam,
      })
    ).toEqual({ inProgress: false, list: [newExam] });
  });

  it('should handle START_ASYNC_EXAM', () => {
    expect(
      exams(undefined, {
        type: types.START_ASYNC_EXAM,
      })
    ).toEqual({ inProgress: true, list: [] });
  });

  it('should handle RECEIVE_EXAMS', () => {
    expect(
      exams(initialEmpty, {
        type: types.RECEIVE_EXAMS,
        exams: examList,
      })
    ).toEqual({
      inProgress: false,
      list: examList,
    });
  });

  it('should handle EDIT_EXAM', () => {
    const editedExam = {
      _id: 2,
      title: 'new test title second',
    };
    expect(
      exams(examList, {
        type: types.EDIT_EXAM,
        exam: editedExam,
      })
    ).toEqual({
      inProgress: false,
      list: [
        { _id: 1, title: 'first title' },
        { _id: 2, title: 'new test title second' },
      ],
    });
  });

  it('should handle DELETE_EXAM', () => {
    expect(
      exams(examList, {
        type: types.DELETE_EXAM,
        id: 1,
      })
    ).toEqual({
      inProgress: false,
      list: [
        {
          _id: 2,
          title: 'second title',
        },
      ],
    });
  });

  it('should handle SHOW_ERROR', () => {
    expect(
      exams(undefined, {
        type: types.SHOW_ERROR,
      })
    ).toEqual({ inProgress: false, list: [] });
  });
});
