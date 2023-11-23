import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Table from "./components/Table";

import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handlerChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  function handlerDataUser(data) {
    let result = calculateInvestmentResults(data);
    // console.log(result);
  }
  return (
    <>
      <Header />
      <UserInput onChange={handlerChange} userInput={userInput} />
      {userInput.duration > 0 ? (
        <Table input={userInput} />
      ) : (
        <div className="alert">Incorret number, need to be above 1 </div>
      )}
    </>
  );
}

export default App;
