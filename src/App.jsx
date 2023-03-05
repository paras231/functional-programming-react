import React from "react";
import Quiz from "./Page/Quiz";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TableFile from "./components/TableFile";
import CardGame from "./components/CardGame";
import CreatableForm from "./components/CreatableForm";
import HookConcepts from "./components/HookConcepts";
import FunctionalConcepts from "./components/FunctionalConcepts";
import ReducerHookConcept from "./components/Hooks/ReducerHookConcept";
import {
  NewComponent,
  PracticeComponent,
  JsConcepts,
  PromiseConcepts
} from "./components/FunctionalConcepts";

const App = () => {
  return (
    <>
      {/* <Quiz/> */}
      {/* <Header />
      <HeroSection /> */}
      <div className="bg-purple-400  mx-auto container p-10">
        {/* <TableFile /> */}
        {/* <CardGame /> */}
        {/* <FunctionalConcepts /> */}
        {/* <NewComponent/> */}
        {/* <PracticeComponent /> */}
        {/* <JsConcepts/> */}
        <PromiseConcepts/>
        {/* <ReducerHookConcept /> */}
        {/* <CreatableForm /> */}
        {/* <HookConcepts/> */}
      </div>
    </>
  );
};

export default App;
