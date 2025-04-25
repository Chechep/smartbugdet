import TransactionList from './TransactionList';

export default function TransactionsSection({ transactions, deleteTransaction }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
      <TransactionList 
        transactions={transactions} 
        deleteTransaction={deleteTransaction} 
      />
    </div>
  );
}