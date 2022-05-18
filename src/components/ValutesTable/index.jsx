import React from 'react';
import styles from './ValutesTable.module.css';
import { useSelector } from 'react-redux';

const valArr = [];

const ValutesTable = () => {
  const items = useSelector((state) => state.valutes.items.Valute);

  for (let value in items) {
    valArr.push(items[value]);
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Цифр.код</th>
          <th>Букв.код</th>
          <th>Валюта</th>
          <th>Курс</th>
        </tr>
      </thead>
      <tbody>
        {valArr.map((valute, index) => (
          <tr key={index}>
            <td>{valute?.NumCode}</td>
            <td>{valute?.CharCode}</td>
            <td>{valute?.Name}</td>
            <td>
              {valute?.Value}
              <span
                className={`material-symbols-outlined ${
                  valute?.Value > valute?.Previous
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {valute?.Value > valute?.Previous
                  ? 'arrow_drop_up'
                  : 'arrow_drop_down'}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ValutesTable;
