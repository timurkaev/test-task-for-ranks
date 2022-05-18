import React from 'react';
import ValutesTable from '../components/ValutesTable';
import { useSelector } from 'react-redux';

const Valutes = () => {
  return (
    <div className="bg-white p-5 rounded-md">
      <ValutesTable />
    </div>
  );
};

export default Valutes;
