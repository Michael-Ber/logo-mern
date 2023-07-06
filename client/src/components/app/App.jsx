import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

import './app.scss';

import { fetchRegister } from '../../redux/auth/AuthSlice';
import { fetchMe } from '../../redux/auth/AuthSlice';
import { gettingGoods } from '../../redux/goods/GoodsSlice';

import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import Main from '../pages/main/Main';
import { Catalog } from '../pages/catalog/Catalog';
import { Test } from '../test/Test';

const App = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
      dispatch(fetchMe());
      dispatch(gettingGoods());
      nav("/main");
  }, [])


  return (
    <div className="app">
      <Header />
      <Test />
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/catalog' element={<Catalog />}/>
        
        <Route path='/main/*' element={<Main />}/>

        
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
