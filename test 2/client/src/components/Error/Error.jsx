import React from 'react';
import { useDispatch } from 'react-redux';
import { tryServices } from '../../redux/reducers/GetServicesReducer';

export default function Error({ type }) {
  const dispatch = useDispatch();
  const fun = () => {
    dispatch(tryServices());
    dispatch(type);
  };
  // попробывать чкрез сначала одну функцию и потом по тайпу
  return (
    <div style={{
      width: '40%',
      height: '80px',
      border: ' 2px solid grey',
      backgroundColor: ' #f8d7da',
      borderRadius: '0.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
    }}
    >
      Произошла ошибка
      <button type="button" className="btn btn-dark" onClick={() => fun()}>Повторить запрос</button>
    </div>
  );
}
