import TransactionForm from './TransactionForm';
import ChartSection from './ChartSection';
import MonthSelector from './MonthSelector';
import FinancialSummary from './FinancialSummary';

export default function Dashboard({ 
  transactions, 
  currentMonth, 
  currentYear, 
  goToPreviousMonth, 
  goToNextMonth,
  addTransaction 
}) {
  // Calculate totals
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      
      {/* Top - Add Transaction Form */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Add Transaction</h2>
        <TransactionForm addTransaction={addTransaction} />
      </div>
      
      {/* Bottom - Month Selector + Financial Summary + Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
        
        <MonthSelector 
          currentMonth={currentMonth}
          currentYear={currentYear}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
        />
        
        <FinancialSummary 
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
        
        <ChartSection transactions={transactions} />
      </div>
    </div>
  );
}