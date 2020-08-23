import React from 'react';
import ExamDetail from '../../components/exam/ExamDetail';
import { render, fireEvent, screen } from '../../../test-utils';

const table = document.createElement('tbody');

const mockDelete = jest.fn();

const exam = {
  _id: 1,
  title: 'this is the title',
};

it('shows exam attributes', () => {
  render(<ExamDetail exam={exam} onDelete={mockDelete} key={exam._id} />, {
    container: document.body.appendChild(table),
  });

  expect(screen.getByText(/this is the title/i)).toBeInTheDocument();
});
