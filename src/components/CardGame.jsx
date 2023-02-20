import React, { useMemo, useEffect } from "react";

const CardGame = () => {
  const array = [10, 20, 30, 40, 50, 60];
  const [data, setData] = React.useState(array);
  const [removedElem, setRemovedElem] = React.useState([]);
  function removeElem(arr) {
    const elem = arr.shift();
    setRemovedElem((prev) => [...prev, elem]);
    return arr;
  }
  console.log(removedElem, "removed elements");
  // remove element from array on click
  function handleRemove() {
    const result = removeElem(data);
    console.log(result,'remaining elements');
    setData(result);
  }

  return (
    <>
      <button className="bg-orange-400" onClick={handleRemove}>
        Remove elem
      </button>
      <div className="flex gap-4">
        {data?.map((value, index) => {
          return (
            <div key={index}>
              <div>
                <section className="bg-blue-500 p-4 cursor-pointer">
                  {value}
                </section>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardGame;
