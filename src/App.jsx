import React from "react";
import Quiz from "./Page/Quiz";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TableFile from "./components/TableFile";
const App = () => {
  return (
    <>
      {/* <Quiz/> */}
      {/* <Header />
      <HeroSection /> */}
      <div className="bg-purple-400  mx-auto container p-10">
        <TableFile />
      </div>
    </>
  );
};

export default App;
