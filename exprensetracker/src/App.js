import React, { useState } from 'react';
import Layout from './components/common/Layout';
import ExpenseForm from './components/features/ExpenseFrom';
import ExpenseList from './components/features/ExpenseList';

const App = () => {
  const [expenseLists, setExpenseLists] = useState([]);
  const [expenseData, setExpenseData] = useState(null);

  const addExpenseListHandler = (data) => {
    // setExpenseLists([data, ...expenseLists]);
    setExpenseLists((prevState) => [data, ...prevState]);
  };

  const updatedExpenseHandler = (data) => {
    console.log(data);
    const updateArr = expenseLists.map((expense) => {
      if (expense.id === data.id) {
        return {
          id: data.id,
          title: data.title,
          price: data.price,
          date: data.date,
        };
      }
      return expense;
    });
    setExpenseLists(updateArr);
    setExpenseData(null);
  };

  const getEditDataHandler = (data) => {
    setExpenseData(data);
  };

  const deleteExpenseHandler = (id) => {
    console.log(id);
    const filterArr = expenseLists.filter((data) => +data.id !== +id);
    setExpenseLists(filterArr);
  };
  return (
    <Layout>
      <ExpenseForm
        expenseData={expenseData}
        addExpenseListHandler={addExpenseListHandler}
        updatedExpenseHandler={updatedExpenseHandler}
      />
      <ExpenseList
        expenses={expenseLists}
        getEditData={getEditDataHandler}
        deleteExpense={deleteExpenseHandler}
      />
    </Layout>
  );
};

export default App;
