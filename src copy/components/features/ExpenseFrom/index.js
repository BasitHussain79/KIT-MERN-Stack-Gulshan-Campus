import React, { useState } from 'react';

const ExpenseFrom = ({ onExpenseAdd }) => {
  // const [expenseTitle, setExpenseTitle] = useState('');
  // const [expensePrice, setExpensePrice] = useState('');
  // const [expenseDate, setExpenseDate] = useState('');

  const [expenseData, setExpenseData] = useState({
    title: '',
    price: '',
    date: '',
  });

  const onChangeHandler = (e) => {
    // setExpenseTitle(e.target.value);
    console.log(e.target.name, e.target.value);
    setExpenseData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(expenseData);
    onExpenseAdd(expenseData);
    // console.log({
    //   expenseTitle,
    //   expensePrice,
    //   expenseDate,
    // });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <p>{expenseData.title}</p>
      <div>
        <label htmlFor='expenseTitle'>Title</label> <br />
        <input
          type='text'
          id='expenseTitle'
          name='title'
          value={expenseData.title}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor='expensePrice'>Price</label> <br />
        <input
          type='number'
          id='expensePrice'
          name='price'
          value={expenseData.price}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor='expenseDate'>Date</label> <br />
        <input
          type='date'
          id='expenseDate'
          name='date'
          value={expenseData.date}
          onChange={onChangeHandler}
        />
      </div>

      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
