import React, { useState } from 'react';
import ExpenseFrom from './components/features/ExpenseFrom';
import DefaultLayout from './components/layout/DefaultLayout';
import ExpenseList from './components/features/ExpenseList';
import './App.css';

const expenses = [
  {
    title: 'Expense 01',
    price: 233,
    date: '2001-01-22',
  },
  {
    title: 'Expense 02',
    price: 233,
    date: '2001-01-22',
  },
  {
    title: 'Expense 03',
    price: 233,
    date: '2001-01-22',
  },
];
const App = () => {
  const [expenseLists, setExpenseLists] = useState(expenses);

  const addExpenseListHandler = (newExpense) => {
    setExpenseLists((prevState) => [newExpense, ...prevState]);
  };
  return (
    <DefaultLayout>
      <ExpenseFrom onExpenseAdd={addExpenseListHandler} />
      <ExpenseList expenseList={expenseLists} />
    </DefaultLayout>
  );
};

export default App;
