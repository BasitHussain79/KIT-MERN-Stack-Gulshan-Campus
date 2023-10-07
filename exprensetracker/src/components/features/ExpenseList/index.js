import React from 'react';
import Expense from './Expense';

const ExpenseList = ({ expenses, getEditData, deleteExpense }) => {
  return (
    <ul>
      {expenses &&
        expenses.length > 0 &&
        expenses.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            getEditData={getEditData}
            deleteExpense={deleteExpense}
          />
        ))}
    </ul>
  );
};

export default ExpenseList;
