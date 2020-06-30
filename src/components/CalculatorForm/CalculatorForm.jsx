import React, { useState, useEffect } from 'react';
import './CalculatorForm.css';
import Configurator from '../Configurator/Configurator';
import ResultDisplay from '../ResultDisplay/ResultDisplay';

const CalculatorForm = () => {
  const [inputs, setInputs] = useState({
    monthlySpending: 10,
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
      <Configurator
        label='Monthly ingredient spending'
        handleChange={handleChange}
        type='number'
        min={10}
        max={100}
        name='monthlySpending'
        value={monthlySpending}
        isMoney={true}
      />
      <Configurator
        label='Full-time employees that process invoices'
        handleChange={handleChange}
        type='number'
        min={1}
        max={10}
        name='employees'
        value={employees}
        isMoney={false}
      />
      <div className='results-block'>
        <ResultDisplay
          label='Estimated cost food savings'
          result={foodSavings}
        />
        <ResultDisplay
          label='Your estimated annual savings'
          result={anualSavings}
        />
      </div>
    </div>
  );
};

export default CalculatorForm;
