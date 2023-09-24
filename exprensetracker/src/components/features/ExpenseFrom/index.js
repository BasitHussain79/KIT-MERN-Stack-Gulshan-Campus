import React from 'react';

const ExpenseFrom = () => {
  return (
    <form>
      <div>
        <label htmlFor='expenseTitle'>Title</label> <br />
        <input type='text' id='expenseTitle' name='title' />
      </div>
      <div>
        <label htmlFor='expensePrice'>Price</label> <br />
        <input type='text' id='expensePrice' name='price' />
      </div>
      <div>
        <label htmlFor='expenseDate'>Date</label> <br />
        <input type='date' id='expenseDate' name='date' />
      </div>
    </form>
  );
};

export default ExpenseFrom;
