export default function FinancialSummary({ totalIncome, totalExpenses }) {
    return (
      <div className="flex justify-between mb-4">
        <div className="text-center p-4 bg-green-100 rounded-lg">
          <p className="text-green-700 font-bold">Income</p>
          <p className="text-2xl font-bold">ksh {totalIncome.toFixed(2)}</p>
        </div>
        <div className="text-center p-4 bg-red-100 rounded-lg">
          <p className="text-red-700 font-bold">Expenses</p>
          <p className="text-2xl font-bold">Ksh {totalExpenses.toFixed(2)}</p>
        </div>
        <div className="text-center p-4 bg-blue-100 rounded-lg">
          <p className="text-blue-700 font-bold">Remaining</p>
          <p className="text-2xl font-bold">Ksh {(totalIncome - totalExpenses).toFixed(2)}</p>
        </div>
      </div>
    );
  }