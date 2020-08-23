import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import ExamListContainer from '../../containers/exam/ExamListContainer';
import fetchMock from 'fetch-mock';

const BASE_URL = 'http://localhost:3001/v1/';

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

describe('ExamListContainer', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('Renders the connected app with initialState', async () => {
    fetchMock.getOnce(`${BASE_URL}exams/`, {
      body: [{ _id: 1, title: 'exam prueba' }],
      headers: { 'content-type': 'application/json' },
    });
    render(<ExamListContainer />, {
      initialState: { exams: initialState },
    });

    const text = await screen.findByText(/exam prueba/i);

    expect(text).toBeInTheDocument();
  });

  it('Renders Loading when is waiting', async () => {
    render(<ExamListContainer />, {
      initialState: { exams: initialState },
    });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('Renders Error message when servers return error', async () => {
    fetchMock.getOnce(`${BASE_URL}exams/`, {
      status: 400,
      body: { message: 'this is an error' },
      headers: { 'content-type': 'application/json' },
    });
    render(<ExamListContainer />, {
      initialState: { exams: initialState },
    });

    const text = await screen.findByText(/this is an error/i);
    expect(text).toBeInTheDocument();
  });
});
