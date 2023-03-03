import React, { useReducer } from "react";

const ReducerHookConcept = () => {
  // creating a counter->
  const initialState = {
    count: 0,
  };

  //   function reducer(state, action) {
  //     switch (action.type) {
  //       case "increment":
  //         return { count: state.count + 1 };

  //       case "decrement":
  //         return { count: state.count - 1 };
  //       default:
  //         return state;
  //     }
  //   }

  // useReducer a reducer function and a initialState.
  //   const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state);
  //   state is basically initial state

  //? handeling input changes ->

  const initialState2 = {
    name: "",
    email: "",
  };

  function reducer2(state, action) {
    switch (action.type) {
      case "change":
        return { ...state, [action.payload.name]: action.payload.value };
      default:
        return state;
    }
  }

  function handleInputChange(e) {
    dispatch({
      type: "change",
      payload: { name: e.target.name, value: e.target.value },
    });
  }

  const [state, dispatch] = useReducer(reducer2, initialState2);
  console.log(state);

  return (
    <>
      {/* <button
        className="bg-orange-500"
        onClick={() => dispatch({ type: "increment" })}
      >
        Click
      </button>

      <span className="bg-blue-400">{state.count}</span> */}
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleInputChange}
      />
    </>
  );
};

export default ReducerHookConcept;
