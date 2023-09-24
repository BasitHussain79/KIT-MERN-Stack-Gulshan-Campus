import React from 'react';
import ExpenseFrom from './components/features/ExpenseFrom';
import DefaultLayout from './components/layout/DefaultLayout';

const App = () => {
  return (
    <DefaultLayout>
      <ExpenseFrom />
    </DefaultLayout>
  );
};

export default App;
