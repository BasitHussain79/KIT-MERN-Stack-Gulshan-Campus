import React, { useEffect, useState } from 'react';

const ExpenseForm = ({
  expenseData: editExpenseData,
  addExpenseListHandler,
  updatedExpenseHandler,
}) => {
  const [expenseData, setExpenseData] = useState({
    title: '',
    price: '',
    date: '',
  });

  useEffect(() => {
    // console.log('effect run');
    setExpenseData({
      title: editExpenseData?.title ?? '',
      price: editExpenseData?.price ?? '',
      date: editExpenseData?.date ?? '',
    });
  }, [editExpenseData]);

  const onChangeHandler = (e) => {
    // setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
    setExpenseData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    editExpenseData !== null
      ? updatedExpenseHandler({ id: editExpenseData?.id, ...expenseData })
      : addExpenseListHandler({
          id: Math.floor(Math.random() * 100),
          ...expenseData,
        });

    setExpenseData({
      title: '',
      price: '',
      date: '',
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <h1>Expense From</h1>
      <div>
        <label htmlFor='title'>Title</label> <br />
        <input
          type='text'
          name='title'
          value={expenseData.title}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor='price'>Price</label> <br />
        <input
          type='number'
          name='price'
          value={expenseData.price}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <label htmlFor='date'>Date</label> <br />
        <input
          type='date'
          name='date'
          value={expenseData.date}
          onChange={onChangeHandler}
        />
      </div>

      <div>
        <button type='submit'>
          {editExpenseData !== null ? 'Update' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
