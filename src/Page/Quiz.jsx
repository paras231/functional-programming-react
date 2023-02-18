import React from "react";
import { quiz } from "../quiz";

const Quiz = () => {
  const [selectedOption, setSelectedOption] = React.useState("");
  console.log(selectedOption, "line 6");
  return (
    <>
      <div className="container  mx-auto mt-10 p-6 flex  flex-col gap-5">
        {/* design question card and map the options with radio buttons below question */}
        {quiz.map((q) => {
          return (
            <>
              <div className=" shadow-2xl shadow-purple-600 rounded-xl bg-indigo-400 p-4">
                {/* question div */}
                <div className="flex gap-5">
                  <span>Q</span>
                  <p>{q.quiz?.question}</p>
                </div>
                {/* options div */}
                {q.quiz.option.map((option) => {
                  return (
                    <>
                      <div>
                        <div className="flex gap-5  p-2 cursor-pointer">
                          <input
                            type="radio"
                            value={`${option?.a}`}
                            checked={selectedOption === `${option?.a}`}
                            onChange={() => setSelectedOption(`${option?.a}`)}
                          />
                          <label htmlFor=""> {option?.a}</label>
                        </div>
                        <div className="flex gap-5  p-2 cursor-pointer">
                          <input
                            type="radio"
                            value={`${option?.b}`}
                            checked={selectedOption === `${option?.b}`}
                            onChange={() => setSelectedOption(`${option?.b}`)}
                          />
                          <label htmlFor="">{option?.b}</label>
                        </div>
                        <div className="flex gap-5  p-2 cursor-pointer">
                          <input
                            type="radio"
                            value={`${option?.c}`}
                            checked={selectedOption === `${option?.c}`}
                            onChange={() => setSelectedOption(`${option?.c}`)}
                          />
                          <label htmlFor="">{option?.c}</label>
                        </div>
                        <div className="flex gap-5  p-2 cursor-pointer">
                          <input
                            type="radio"
                            value={`${option?.d}`}
                            checked={selectedOption === `${option?.d}`}
                            onChange={() => setSelectedOption(`${option?.d}`)}
                          />
                          <label htmlFor="">{option?.d}</label>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* answer verificaiton */}
              <div>
                {selectedOption === "" ? (
                  <p></p>
                ) : q.quiz.answer == selectedOption ? (
                  <p>Correct</p>
                ) : q.quiz.answer !== selectedOption ? (
                  <p>Incorrect</p>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Quiz;
