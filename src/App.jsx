import React from 'react';
import Header from './components/Header';
import Calculator from './pages/Calculator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Valutes from './pages/Valutes';
import { useDispatch } from 'react-redux';
import { getValutes } from './redux/actions/valutesAction';

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getValutes());
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/valutes" element={<Valutes />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
