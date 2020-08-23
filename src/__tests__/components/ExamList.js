import React from 'react';
import ExamList from '../../components/exam/ExamList';
import { render, fireEvent, screen } from '../../../test-utils';

/*const examList = [
  {
    _id: 1,
    title: 'first title',
  },
  {
    _id: 2,
    title: 'second title',
  },
];*/

const examList = [
  {
    _id: 2,
    title: 'second title',
  },
];

const mockEdit = jest.fn();
const mockDelete = jest.fn();

describe('ExamList', () => {
  it('shows element in list', () => {
    render(
      <ExamList exams={examList} onEdit={mockEdit} onDelete={mockDelete} />
    );

    expect(screen.getByText(/second title/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Eliminar/i));
    expect(mockDelete.mock.calls.length).toBe(1);
  });
});
