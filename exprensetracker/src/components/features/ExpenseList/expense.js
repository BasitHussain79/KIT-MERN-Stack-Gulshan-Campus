import React from 'react';
import './style.css';

const Expense = ({ expense }) => {
  console.log(expense);
  const year = new Date(expense.date).getFullYear();
  const month = new Date(expense.date).getMonth() + 1;
  const day = expense.date.slice(8);

  const { title, price } = expense;

  console.log(month, year, day);
  return (
    <li className='list'>
      <div className='date'>
        <p className='day'>{day}</p>
        <p className='month'>{month}</p>
        <p className='year'>{year}</p>
      </div>
      <div className='title'>{title}</div>
      <div className='price'>${price}</div>
    </li>
  );
};

export default Expense;
