import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Table = ({ input }) => {
  const results = calculateInvestmentResults(input);
  const initialIvestiment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investiment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear -
            result.annualInvestment * result.year -
            initialIvestiment;
          const totalAmountInvest = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <th>{result.year}</th>
              <th>{formatter.format(result.valueEndOfYear)}</th>
              <th>{formatter.format(result.interest)}</th>
              <th>{formatter.format(totalInterest)}</th>
              <th>{formatter.format(totalAmountInvest)}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
