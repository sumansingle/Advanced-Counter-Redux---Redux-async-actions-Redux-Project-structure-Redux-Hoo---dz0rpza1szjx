const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';
const SIGN_IN = 'SIGN_IN';
const SIGN_OUT = 'SIGN_OUT';

// Define actions
const increment = () => {
  return {
    type: INCREMENT
  };
};

const decrement = () => {
  return {
    type: DECREMENT
  };
};

const incrementByAmount = (amount) => {
  return {
    type: INCREMENTBYAMOUNT,
    payload: amount
  };
};

const signIn = () => {
  return {
    type: SIGN_IN
  };
};

const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
