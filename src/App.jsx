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
  PromiseConcepts,
} from "./components/FunctionalConcepts";
import {
  ParentCommon,
  CommonProductcard,
  CommonTableComponent,
} from "./components/PropsData/Common";

const product = {
  img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  price: 200,
  name: "Shoe",
};

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
        {/* <PromiseConcepts/> */}
        {/* <ReducerHookConcept /> */}
        {/* <CreatableForm /> */}
        {/* <HookConcepts/> */}
        <ParentCommon />
        <CommonProductcard product={product} />
        <CommonTableComponent />
      </div>
    </>
  );
};

export default App;
