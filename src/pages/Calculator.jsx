import React from 'react';
import CalculateForm from '../components/CalculateForm';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Calculator = () => {
  const items = useSelector((state) => state.valutes.items);

  const mainRates = [items.Valute?.USD, items.Valute?.EUR, items.Valute?.GBP];

  return (
    <div className="bg-white p-5 rounded-md">
      <h1 className="font-bold text-2xl">
        Курсы валют на {moment(items?.Date).subtract(10, 'days').calendar()}
      </h1>
      <div className="flex justify-between">
        {mainRates?.map((valute, index) => (
          <div key={index} className="mt-8 border rounded-md p-5 w-64">
            <div className="font-bold text-xl">{valute?.CharCode}</div>
            <div>{valute?.Name.slice(0, 15)}</div>
            <div className="mt-3 text-xl">
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
            </div>
          </div>
        ))}
      </div>
      <CalculateForm />
    </div>
  );
};

export default Calculator;
