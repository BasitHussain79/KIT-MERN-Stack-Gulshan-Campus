import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import { Form, Input } from './style';

const inputStyle = {
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: 'transparent',
  border: '1px solid #333',
};

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
    <Form onSubmit={submitHandler} className={style.form}>
      <h1>Expense From</h1>
      <div>
        <label htmlFor='title'>Title</label> <br />
        <Input
          type='text'
          name='title'
          value={expenseData.title}
          onChange={onChangeHandler}
          validation={expenseData.title.length !== 0 ? 'none' : '4px solid red'}
          // style={{
          //   ...inputStyle,
          //   borderColor: expenseData.title.length === 0 ? 'red' : '#333',
          // }}
        />
      </div>
      <div>
        <label htmlFor='price'>Price</label> <br />
        <Input
          type='number'
          name='price'
          value={expenseData.price}
          onChange={onChangeHandler}
          style={inputStyle}
        />
      </div>
      <div>
        <label htmlFor='date'>Date</label> <br />
        <Input
          type='date'
          name='date'
          value={expenseData.date}
          onChange={onChangeHandler}
          style={inputStyle}
        />
      </div>

      <div>
        <button type='submit'>
          {editExpenseData !== null ? 'Update' : 'Submit'}
        </button>
      </div>
    </Form>
  );
};

export default ExpenseForm;
