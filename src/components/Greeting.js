import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchGreetings from '../redux/greeting';

const Greeting = () => {
  const text = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <p>
      Greeting:
      <strong>{text}</strong>
    </p>
  );
};

export default Greeting;
