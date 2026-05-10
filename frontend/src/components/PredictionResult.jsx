import { CheckCircle, XCircle, ArrowLeft, RefreshCw } from 'lucide-react';

export default function PredictionResult({ result, onReset }) {
  const isApproved = result.approved;

  return (
    <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
      <div className={`p-6 rounded-full shadow-2xl mb-8 ${isApproved ? 'bg-green-100 shadow-green-500/40' : 'bg-orange-100 shadow-orange-500/40'}`}>
        {isApproved ? (
          <CheckCircle className="w-24 h-24 text-green-500 animate-bounce" />
        ) : (
          <RefreshCw className="w-24 h-24 text-orange-500 animate-pulse" />
        )}
      </div>

      <h2 className={`text-3xl font-bold mb-4 text-center ${isApproved ? 'text-green-400' : 'text-orange-400'}`}>
        {isApproved ? "Application Approved!" : "Keep Going, Don't Give Up!"}
      </h2>

      <p className="text-lg text-gray-300 text-center max-w-lg leading-relaxed mb-10">
        {result.message}
      </p>

      <button
        onClick={onReset}
        className="flex items-center space-x-2 py-3 px-8 bg-primary-900/40 text-primary-300 hover:bg-primary-800/60 rounded-full transition-all font-semibold"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Return to Application</span>
      </button>
    </div>
  );
}
