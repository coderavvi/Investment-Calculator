import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >=1;

  // This function updates the value of the input field as the user types 
  function handleChange(initialUserInput, newValue) {
    setUserInput((prevInputs) => {
      return {
        ...prevInputs,
        [initialUserInput]: parseFloat(newValue),
      };
    });
  }


  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
      {inputIsValid && <Result userInput={userInput}/>}
    </>
  );
}

export default App;
