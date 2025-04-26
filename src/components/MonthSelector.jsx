import { MONTH_NAMES } from '../utils/constants';

export default function MonthSelector({ currentMonth, currentYear, goToPreviousMonth, goToNextMonth }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <button 
          onClick={goToPreviousMonth}
          className="bg-gray-200 p-2 rounded-l-md hover:bg-gray-500"
        >
          &lt;
        </button>
        <span className="px-4 font-bold">
          {MONTH_NAMES[currentMonth]} {currentYear}
        </span>
        <button 
          onClick={goToNextMonth}
          className="bg-gray-200 p-2 rounded-r-md hover:bg-gray-500"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}