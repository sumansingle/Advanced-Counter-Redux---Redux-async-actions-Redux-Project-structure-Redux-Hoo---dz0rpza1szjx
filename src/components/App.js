import React from 'react';

const store = createStore(counterReducer);

function App() {
  const [addAmount, setAddAmount] = useState(2);

  const handleAddAmountChange = (e) => {
    setAddAmount(parseInt(e.target.value));
  };

  const handleIncrement = () => {
    store.dispatch(increment());
  };

  const handleDecrement = () => {
    store.dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    store.dispatch(incrementByAmount(addAmount));
  };

  const handleSignIn = () => {
    store.dispatch(signIn());
  };

  const handleSignOut = () => {
    store.dispatch(signOut());
  };

  const renderCounter = () => {
    if (store.getState().isLogged) {
      return (
        <>
          <div data-testid='counter'>{store.getState().counter}</div>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <input
            type='number'
            value={addAmount}
            onChange={handleAddAmountChange}
          />
          <button onClick={handleIncrementByAmount}>Add amount</button>
        </>
      );
    } else {
      return null;
    }
  };

  const renderLoginButton = () => {
    if (store.getState().isLogged) {
      return <button onClick={handleSignOut}>Logout</button>;
    } else {
      return <button onClick={handleSignIn}>Login</button>;
    }
  };

  return (
    <div id='main'>
      {renderCounter()}
      {renderLoginButton()}
    </div>
  );
}

export default App;
