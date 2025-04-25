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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left sidebar - Add Transaction Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <TransactionForm addTransaction={addTransaction} />
      </div>
      
      {/* Main content - Charts */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
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
