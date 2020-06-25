import React, { useState, useEffect } from 'react';
import './CalculatorForm.css';

const CalculatorForm = () => {
  const [inputs, setInputs] = useState({
    monthlySpending: 1,
    employees: 1,
  });
  const { monthlySpending, employees } = inputs;
  const [foodSavings, setFoodSavings] = useState(
    (monthlySpending * 0.3).toFixed(2)
  );
  const [anualSavings, setAnualSavings] = useState(
    (employees * 1337 + parseFloat(foodSavings)).toFixed(2)
  );

  useEffect(() => {
    calculateFoodSavings();
    calculateAnualSavings();
    // eslint-disable-next-line
  }, [monthlySpending, employees, foodSavings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'monthlySpending':
        if (value < 1 || value > 100) return;
        break;
      case 'employees':
        if (value < 1 || value > 10) return;
        break;

      default:
        break;
    }
    setInputs({ ...inputs, [name]: parseInt(value) });
  };

  const calculateFoodSavings = () => {
    setFoodSavings((monthlySpending * 0.3).toFixed(2));
  };
  const calculateAnualSavings = () => {
    setAnualSavings((employees * 1337 + parseFloat(foodSavings)).toFixed(2));
  };

  return (
    <div className='calculator-form'>
      <div className='form-block'>
        <label>Monthly Ingredient Spending: (1-100) </label>
        <div>
          <label>$ </label>
          <input
            type='number'
            min={1}
            max={100}
            name='monthlySpending'
            value={monthlySpending}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
      </div>
      <div className='form-block'>
        <label>Full-Time Employees: (1-10)</label>
        <input
          type='number'
          min={1}
          max={10}
          name='employees'
          value={employees}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
      <div className='form-block'>
        <label>Estimated Food Cost Savings = </label>
        <span>{`$ ${foodSavings}`}</span>
      </div>
      <div className='form-block'>
        <label>Your Estimated Anual Savings = </label>
        <span>{`$ ${anualSavings}`}</span>
      </div>
    </div>
  );
};

export default CalculatorForm;
