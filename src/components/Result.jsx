import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Result({userInput}) {
  const resultData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((yearlyData) => {
            const totalInterest =
              yearlyData.valueEndOfYear -
              yearlyData.annualInvestment * yearlyData.year -
              initialInvestment;
            const totalInvestment = yearlyData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearlyData.year}>
              <td>{yearlyData.year}</td>
              <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
              <td>{formatter.format(yearlyData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}