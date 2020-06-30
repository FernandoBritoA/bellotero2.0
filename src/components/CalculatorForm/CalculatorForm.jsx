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

  const [slider1, setSlider1] = useState({
    input: null,
    min: null,
    max: null,
    num: null,
  });
  const [slider2, setSlider2] = useState({
    input: null,
    min: null,
    max: null,
    num: null,
  });

  useEffect(() => {
    calculateFoodSavings();
    calculateAnualSavings();

    if (!slider1.input) {
      const input = document.getElementById('isMoney');
      const min = Number(input.getAttribute('min'));
      const max = Number(input.getAttribute('max'));
      const num = (max - min) / 100;
      setSlider1({ input, min, max, num });
    }
    if (!slider2.input) {
      const input = document.getElementById('isNotMoney');
      const min = Number(input.getAttribute('min'));
      const max = Number(input.getAttribute('max'));
      const num = (max - min) / 100;
      setSlider2({ input, min, max, num });
    }

    // eslint-disable-next-line
  }, [monthlySpending, employees, foodSavings]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'monthlySpending':
        if (value < 1 || value > 100) return;
        slider1.input.style.setProperty(
          '--value',
          String(Number(value - slider1.min) / slider1.num)
        );
        break;
      case 'employees':
        if (value < 1 || value > 10) return;
        slider2.input.style.setProperty(
          '--value',
          String(Number(value - slider2.min) / slider2.num)
        );
        break;

      default:
        break;
    }
    //const input = document.querySelector('input[type=range]');
    //input.style.setProperty('--value', Number(value));
    //console.log(input);
    /*for (const input of document.querySelectorAll('input[type=range]')) {
      console.log(input);
      input.style.setProperty('--value', Number(value));
    }*/

    setInputs({ ...inputs, [name]: Number(value) });
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
        min={10}
        max={100}
        step={0.1}
        name='monthlySpending'
        value={monthlySpending}
        isMoney={true}
      />
      <Configurator
        label='Full-time employees that process invoices'
        handleChange={handleChange}
        min={1}
        max={10}
        step={0.1}
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
