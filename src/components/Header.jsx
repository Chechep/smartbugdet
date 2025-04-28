import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { signInWithGoogle, signOutUser } from '../hooks/useAuth';
export default function Header({ balance }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
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
            Balance: Ksh {balance.toFixed(2)}
          </div>
          {/* Profile button with dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="flex items-center p-2 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Open profile menu"
            >
              {/* User avatar/icon */}
              <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            
            {/* Profile dropdown menu */}
            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log Out</a>
              </div>
            )}
          </div>
          <div>
        {user ? (
          <>
            {/* User is signed in */}
            <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}>
              Profile
            </button>
            {isProfileMenuOpen && (
              <div>
                <span>Welcome {user.displayName}</span>
                <button onClick={signOutUser}>Sign Out</button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* No user signed in */}
            <button onClick={signInWithGoogle}>Sign In</button>
          </>
        )}
      </div>

        </div>
      </div>
    </header>
  );
}