import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Error from '../Error/Error';
import { tryServices } from '../../redux/reducers/GetServicesReducer';

export default function OneService() {
  const dispatch = useDispatch();
  const params = useParams();
  const { error, one } = useSelector((s) => s.services);
  useEffect(() => {
    dispatch(tryServices());
    dispatch({ type: 'GET_ONESERVICE', payload: params.id });
  }, []);
  return (
    (error
      ? <Error type={{ type: 'GET_ONESERVICE' }} />
      : (
        <div>
          Информация:
          <p>
            Название:
            {' '}
            {one.name}
          </p>
          <p>
            Цена:
            {' '}
            {one.price}
          </p>
          <p>
            Описание:
            {' '}
            {one.content}
          </p>
        </div>
      )
    )
  );
}
