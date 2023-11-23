import { useState } from "react";

const UserInput = ({ onChange, userInput }) => {
  function handlerInputIvenstiment(e) {
    e.preventDefault();
    onChange("initialInvestment", e.target.value);
  }

  function handlerInputUserAnnual(e) {
    e.preventDefault();
    onChange("annualInvestment", e.target.value);
  }
  function handlerInputUserReturn(e) {
    e.preventDefault();
    onChange("expectedReturn", e.target.value);
  }

  function handlerInputUserDuration(e) {
    e.preventDefault();

    onChange("duration", e.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investiment </label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={handlerInputIvenstiment}
            required
          />
        </p>
        <p>
          <label>Annual Investiment </label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={handlerInputUserAnnual}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return </label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={handlerInputUserReturn}
          />
        </p>
        <p>
          <label>Duration </label>
          <input
            type="number"
            value={userInput.duration}
            onChange={handlerInputUserDuration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
