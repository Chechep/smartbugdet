export default function Header({ balance }) {
    return (
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SmartBudget</h1>
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">
            Balance: Ksh {balance.toFixed(2)}
          </div>
        </div>
      </header>
    );
  }