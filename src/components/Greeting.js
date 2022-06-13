import React, { useEffect } from "react"
import PropTypes from "prop-types";
import fetchGreetings from "../redux/greeting";
import { useDispatch, useSelector } from "react-redux";

const Greeting = () => {
  const text = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, []);

  return (
    <p>Greeting: {text}</p>
    );
  };

  Greeting.propTypes = {
    greeting: PropTypes.string
  };
  export default Greeting;