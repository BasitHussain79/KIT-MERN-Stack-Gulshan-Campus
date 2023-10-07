import React from 'react';

const Expense = ({ expense, getEditData, deleteExpense }) => {
  const editHandler = () => {
    console.log(expense);
    getEditData(expense);
  };

  const deleteHandler = () => {
    deleteExpense(expense.id);
  };
  return (
    <li>
      <div className='date'>{expense.date}</div>
      <div>{expense.title}</div>
      <div>${expense.price}</div>
      <button type='button' onClick={editHandler}>
        Edit
      </button>
      <button type='button' onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

export default Expense;
