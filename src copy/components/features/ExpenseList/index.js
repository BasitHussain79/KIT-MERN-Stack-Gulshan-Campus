import React from 'react';
import Expense from './expense';
import './style.css';

const ExpenseList = (props) => {
  return (
    <div>
      {props.expenseList.length === 0 && <h3>No Expense Found!</h3>}
      <ul className='lists'>
        {props.expenseList &&
          props.expenseList.length > 0 &&
          props.expenseList.map((data) => (
            <Expense key={data.title} expense={data} />
          ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
