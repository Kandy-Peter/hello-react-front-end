import axios from 'axios';

const FETCH_GREETING = 'FETCH_GREETING';

const getGreeting = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

const fetchGreetings = () => async (dispatch) => {
  const result = await axios.get('http://127.0.0.1:3000/api/v1/greetings');
  const data = await result.data[0].text;
  dispatch(getGreeting(data));
};

export default fetchGreetings;
