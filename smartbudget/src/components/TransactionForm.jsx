import { useState } from 'react';
import { CATEGORIES } from '../utils/constants';

export default function TransactionForm({ addTransaction }) {
  const [type, setType] = useState('expense');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [isRecurring, setIsRecurring] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!description || !amount) {
      alert('Please fill in all fields');
      return;
    }
    
    addTransaction({
      type,
      description,
      amount: parseFloat(amount),
      category,
      isRecurring
    });
    
    // Reset form
    setDescription('');
    setAmount('');
    setCategory(CATEGORIES[0]);
    setIsRecurring(false);
  };
  
  return (
    <div className='AddTransactionForm'>
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className="flex rounded-md overflow-hidden">
            <button
              type="button"
              className={`w-1/2 py-2 px-4 ${type === 'expense' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setType('expense')}
            >
              Expense
            </button>
            <button
              type="button"
              className={`w-1/2 py-2 px-4 ${type === 'income' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setType('income')}
            >
              Income
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Netflix"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount</label>
          <div className="relative">
            <span className="absolute left-3 top-2">Ksh </span>
            <input
              type="number"
              step="0.01"
              min="0"
              className="w-full p-2 pl-6 border rounded-md"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="     0.00"
            />
          </div>
        </div>
        
        {type === 'expense' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Category</label>
            <select
              className="w-full p-2 border rounded-md"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        )}
        
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="recurring"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="recurring" className="text-gray-700">
            Recurring monthly
          </label>
        </div>
        
        <button
          type="submit"
          className={`w-full py-2 px-4 rounded-md text-white font-bold ${
            type === 'expense' ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
          }`}
        >
          Add {type === 'expense' ? 'Expense' : 'Income'}
        </button>
      </form>
    </div>
  );
}
