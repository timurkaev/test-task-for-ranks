import React from 'react';
import styles from './CalculateForm.module.css';
import { useSelector } from 'react-redux';

let valArr = [];

const CalculateForm = () => {
  const items = useSelector((state) => state.valutes.items?.Valute);

  for (let value in items) {
    valArr.push(items[value]);
  }

  const [result, setResult] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleValue = (e) => {
    setValue(e.target.value);
    setResult((e.target.valueAsNumber / value).toFixed(2));
  };

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
    setResult((e.target.valueAsNumber / value).toFixed(2));
  };

  const handleFromResult = (e) => {
    setResult(e.target.valueAsNumber);
    setAmount((e.target.valueAsNumber * value).toFixed(2));
  };

  return (
    <div className="mt-9">
      <div className="flex justify-between w-2/4">
        <input
          value={amount}
          onChange={handleAmount}
          className={styles.input}
          type="number"
        />
        <select disabled className={styles.select}>
          <option>Российский рубль</option>
        </select>
      </div>

      <div className="flex justify-between w-2/4 mt-3">
        <input
          value={result}
          onChange={handleFromResult}
          className={styles.input}
          type="number"
        />
        <select value={value} onChange={handleValue} className={styles.select}>
          <option>Выберите валюту</option>
          {valArr?.map((item, index) => (
            <option key={index} value={parseFloat(item?.Value)}>
              {item?.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default React.memo(CalculateForm);
