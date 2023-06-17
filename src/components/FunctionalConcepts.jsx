import React, { useState, useEffect } from "react";

const FunctionalConcepts = () => {
  const [userData, setUserData] = useState({});

  // remove an element from an array at given position

  function removeElem(arr, position) {
    arr.splice(position, 1);
    return arr;
  }
  const output = removeElem([20, 30, 40, 50, 60], 3); // will remove 50 from array

  // console.log(output);

  //   add new element in array at given position->

  function addElement(arr, position) {
    arr.splice(position, 0, 100);
    return arr;
  }

  const result = addElement([100, 200, 300, 400, 500], 3); // will add 100 at index 3

  // console.log(result);

  // perform an aciton for each element of an array->

  const newArr = [
    {
      name: "paras",
      email: "paras@gmail.com",
    },
    {
      name: "deepak",
      email: "deepak@gmail.com",
    },
    {
      name: "lokesh",
      email: "lokesh@gmail.com",
    },
  ];

  // useEffect(() => {
  //   newArr.forEach((value, index, arr) => {
  //     value.language = "Javascript";
  //     if (value.hasOwnProperty("language")) {
  //       setUserData(value);
  //       console.log(true); // will check if each object contains a property language or not
  //     } else {
  //       console.log(false);
  //     }
  //   });
  // },[newArr,userData]);

  // console.log(newArr);
  // console.log(userData);
  //  this will add language property in each object of the array.
  return <></>;
};

export default FunctionalConcepts;

export const NewComponent = () => {
  // take an array of object->

  const packageData = [
    {
      day: "1",
      location: "Port Blair",
    },
    {
      day: "2",
      location: "Port Blair",
    },
    {
      day: "3",
      location: "Havelock",
    },
    {
      day: "4",
      location: "Neil Island",
    },
  ];

  const CheckConsecutiveLocation = () => {
    packageData.map((value, index) => {
      if (value.location === packageData[index + 1].location) {
        return (
          <>
            <div>
              <span>{value.day}</span>
              <span>location changed</span>
            </div>
          </>
        );
      } else {
        return (
          <>
            <div>{value.day}</div>
            <span>{value.location}</span>
          </>
        );
      }
    });
  };

  return (
    <>
      <CheckConsecutiveLocation />
    </>
  );
};

// practice loops and conditional while using jsx->

export const PracticeComponent = () => {
  const CheckEvenNumber = () => {
    let i = 1;
    while (i <= 50) {
      if (i % 2 === 0) {
        console.log(i);
        return (
          <>
            <div className="bg-orange-400">{i}</div>
          </>
        );
      } else {
        return (
          <>
            <div className="bg-blue-400">odd</div>
          </>
        );
      }
    }
    i++;
  };
  return <>{CheckEvenNumber}</>;
};

export function JsConcepts() {
  // some js concepts with loops and functions->

  // for of loops->

  // take an array of objects as an example->
  const userData = [
    {
      name: "Jayesh",
      age: 22,
      hasSubcsription: true,
    },
    {
      name: "Parakash",
      age: 20,
      hasSubcsription: true,
    },
    {
      name: "pp",
      age: 32,
      hasSubcsription: false,
    },
    {
      name: "Pop",
      age: 32,
      hasSubcsription: false,
    },
    {
      name: "Deepak",
      age: 45,
      hasSubcsription: true,
    },
    {
      name: "Paras",
      age: 22,
      hasSubcsription: true,
    },
    {
      name: "Lokesh",
      age: 45,
      hasSubcsription: false,
    },
  ];

  const User = () => {
    let allUsers = [];
    for (const { name, age } of userData) {
      // console.log(name, age);

      // just destructured name and age from userData
      allUsers.push(
        <div key={age}>
          <span>{name}</span>
          <span>{age}</span>
        </div>
      );
    }
    return allUsers;
  };
  // this jsx element User will work the same way as we use map method to return elements->

  // ? some more example->

  const getSomeData = (object, index) => {
    for (const [key, value] of Object.entries(object)) {
      // key is basically giving index and value is giving the actual value as an object
      // console.log(value);
    }
  };
  getSomeData(
    userData.map((i) => i),
    userData.map((i, index) => index)
  );

  const Iterator = () => {
    let allUsers = [];
    for (const [index, element] of userData.entries()) {
      // will give the same result as above function
      // console.log(index, element);

      allUsers.push(
        <div key={index}>
          <span className="bg-orange-400">{element.name}</span>
        </div>
      );
    }
    return allUsers;
  };

  // check if a user has subscription plan->

  let subscribedUsers = [];

  checkSubscriptionPlan(userData);

  function checkSubscriptionPlan(users) {
    const filteredUsers = users.filter((user) => {
      return user.hasSubcsription === true;
    });
    subscribedUsers.push(filteredUsers);
  }

  // console.log(subscribedUsers, "line 241");

  // create a function that takes an array as input and keeps track on the data which is being added to the array and returns that data->

  function keepTracke(arr) {
    let newArray = [];
  }

  const updatedArray = keepTracke([10, 20, 30, 40, 50, 40, 10, 20]);
  // now change the updated array value->

  // console.log(updatedArray.lastIndexOf(10));

  // create a function that takes an object of level and keep increase the level bar as the new level is added to that level array->

  const [levels, setLevels] = useState([]);

  function keepTrackingLevel(level) {
    setLevels((prev) => [...prev, level]);
  }

  const [levelData, setLevelData] = useState({
    levelName: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target);
    setLevelData({ ...levelData, [name]: value });
  }

  // console.log(levels);

  //!  some important object methods->

  const employee1 = {
    name: "Paras",
    age: 22,
    position: "MERN STACK",
    language: "JAVASCRIPT",
  };

  const employee2 = {
    name: "Raja",
    age: 26,
    position: "FLUTTER",
    language: "DART",
    hobby: "Cooking",
  };

  //  merge these two objects->
  const merged = { ...employee1, ...employee2 };
  // console.log(merged);

  // define property->

  Object.defineProperties(employee1, {
    hobby: {
      value: "Coding",
    },
    status: {
      value: "Online",
    },
  });

  //  object.keys method->
  const keys = Object.keys(employee1); // will create an array of keys of object.
  // console.log(keys);

  //  object.entries->
  const values = Object.entries(employee2);
  // console.log(values);
  const d = [].concat(...values);
  // console.log(d);
  const [key, value] = values;
  // console.log(key);

  const arr1 = [
    ["name", "Jay"],
    ["age", 22],
    ["location", "Jaipur"],
  ];
  const newObj = Object.fromEntries(arr1); // converts the 2d array into single object.
  // console.log(newObj);

  //! important array methods ->

  const arr2 = ["name", "age", "gender", "value"];
  const arr3 = ["name", "age", "gender", "value"];
  console.log([...arr2, ...arr3]); // will merge the arrays.

  // arr.entris
  const [key1, value1] = arr2.entries();
  console.log(key1, value1);

  const arr = [
    {
      name: "Jain",
    },
    {
      name: "sam",
    },
    {
      name: "Jhon",
    },
  ];

  arr.forEach((item) => {
    if (!item.hasOwnProperty("age")) {
      item.age = 20;
    }
  });
  console.log(arr);

  return (
    <>
      {/* <User />
      {userData.map((value, index) => {
        return (
          <div key={index}>
            <span>{value.name}</span>
          </div>
        );
      })} */}
      <Iterator />
      <div className="flex gap-4">
        <input
          type="text"
          value={levelData.levelName}
          name="levelName"
          placeholder="write level name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={levelData.content}
          name="content"
          placeholder="write content"
          onChange={handleChange}
        />
      </div>
      <button
        className="bg-blue-400"
        onClick={() => keepTrackingLevel(levelData)}
      >
        Add More Level
      </button>
      <label htmlFor="">{levels.length}</label>
      <input type="range" min={levels.length} />
    </>
  );
}

export const PromiseConcepts = () => {
  const [orderStatus, setOrderStatus] = useState(false);
  const [delivered, setDelivered] = useState(false);
  //  update order status->
  function updateOrderStatus() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setOrderStatus(true);
        resolve();
        alert("status updated");
      }, 2000);
    });
  }
  console.log(orderStatus);

  // check if delivered or not-> if not then updated status->

  function updateDeliveryStatus() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setDelivered(true);
        alert("Order has been delivered");
      }, 3000);
    });
  }

  //  check if not delivered->
  let deliveryTime = setInterval(() => {
    if (delivered === false) {
      alert("Please deliver the order");
    }
    clearInterval(deliveryTime);
  }, 9000);
  return (
    <>
      <span>
        {!orderStatus ? (
          <p>Waiting for acceptance</p>
        ) : (
          <h1>Order has been accepted</h1>
        )}
      </span>
      <button
        disabled={orderStatus}
        className={
          orderStatus === false
            ? "bg-orange-400 rounded-sm p-2 text-sm"
            : "bg-pink-400 rounded-sm p-2 text-sm"
        }
        onClick={updateOrderStatus}
      >
        {orderStatus === false ? "Accept" : "Accepted"}
      </button>

      <button
        disabled={delivered}
        onClick={updateDeliveryStatus}
        className="bg-yellow-400 p-2 rounded-sm text-sm"
      >
        {delivered ? "Delivered" : " Deliver Now"}
      </button>
    </>
  );
};

export const CronJobConcept = () => {
  const [time, setTime] = useState(0);
  const [element, setElement] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElement(<div>Rendered at {new Date().toLocaleTimeString()}</div>); // renders time
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <h3>{time}</h3>
      {element}
    </>
  );
};

export const AdvanceFunctions = () => {
  // create a function take takes an array or a object as an argument and return a jsx element accordingly->

  function GridList({ data }) {
    if (
      data &&
      data !== null &&
      data !== undefined &&
      !data.hasOwnProperty("from")
    ) {
      if (data.length >= 2) {
        console.log(data);
        return (
          <>
            <div>
              {data.map((value, i) => {
                return (
                  <div key={i}>
                    <div className="flex ">
                      <span>{value.from}</span>
                      <span>{value.to}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      } else {
        return (
          <>
            <div>
              {data.map((value, i) => {
                return (
                  <div key={i}>
                    <div className="flex gap-2 bg-purple-500 font-bold">
                      <span>{value.from}</span>
                      <span>{value.to}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      }
    }
    return (
      <>
        <div className="flex">
          <span>{data?.from}</span>
          <p>{data?.to}</p>
        </div>
      </>
    );
  }
  const data = [
    {
      from: "Port Blair",
      to: "Havelock",
    },
  ];

  // create a function that uses output of another function and returns something->

  let user = {
    status: "online",
    activities: ["games", "coding", "football"],
  };

  function userActivity(userObj) {
    // check user
    const checkUser = isUserLoggedIn(user);
    if (checkUser && userObj) {
      console.log(userObj.activities);
    }
  }
  userActivity(user);

  // check if user is loggedin->

  function isUserLoggedIn(user) {
    if (user && user !== null && user !== undefined) {
      if (user.status === "online") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }


  


  return (
    <>
      <h3>Advanced</h3>
      <GridList data={data} />
    </>
  );
};
