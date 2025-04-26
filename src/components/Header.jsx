import { useState } from 'react';

export default function Header({ balance }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-blue-900 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        <h1 className="text-2xl font-bold items-center">SmartBudget</h1>
        
        <div className="flex items-center space-x-4">
          <div className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold">
            Balance: ${balance.toFixed(2)}
          </div>
        </div>
      </div>
    </header>
  );
}