import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Error from '../Error/Error';

export default function Services() {
  const dispatch = useDispatch();
  const { arr, error } = useSelector((s) => s.services);
  useEffect(() => {
    dispatch({ type: 'GET_SERVICESS' });
  }, []);
  return (

    (error ? <Error type={{ type: 'GET_SERVICESS' }} />

      : (
        <div>
          Перечень услуг:
          {arr?.map((el) => (
            <ul key={el?.id}>
              <li>
                <Link to={`/services/${el?.id}`}>
                  {' '}
                  {el?.name}
                </Link>
              </li>
            </ul>
          ))}
        </div>
      )
    )
  );
}
