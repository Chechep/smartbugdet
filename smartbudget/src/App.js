import { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionsSection from './components/TransactionsSection';
import Footer from './components/Footer';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [transactions, setTransactions] = useLocalStorage('transactions', []);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  // Toggle between light and dark mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  // Calculate balance
  const balance = transactions.reduce((total, transaction) => {
    return transaction.type === 'income' 
      ? total + parseFloat(transaction.amount) 
      : total - parseFloat(transaction.amount);
  }, 0);
  
  // Add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, {
      ...newTransaction,
      id: Date.now(),
      date: new Date().toISOString(),
      month: currentMonth,
      year: currentYear
    }]);
  };
  
  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };
  
  // Filter transactions by current month and year
  const currentTransactions = transactions.filter(transaction => 
    transaction.month === currentMonth && transaction.year === currentYear
  );
  
  // Month navigation
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  
  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <Header balance={balance} />
      
      <main className="container mx-auto p-4 flex-grow">
        <Dashboard 
          transactions={currentTransactions}
          currentMonth={currentMonth}
          currentYear={currentYear}
          goToPreviousMonth={goToPreviousMonth}
          goToNextMonth={goToNextMonth}
          addTransaction={addTransaction}
        />
        
        <TransactionsSection 
          transactions={currentTransactions} 
          deleteTransaction={deleteTransaction} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
