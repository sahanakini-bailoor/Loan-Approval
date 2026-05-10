import { useState } from 'react';
import LoanForm from './components/LoanForm';
import PredictionResult from './components/PredictionResult';
import { DollarSign } from 'lucide-react';
import axios from 'axios';

function App() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePredict = async (formData) => {
    setLoading(true);
    setError(null);
    setPrediction(null);
    
    // Convert necessary strings to numbers as expected by the backend
    const payload = {
      ...formData,
      ApplicantIncome: parseFloat(formData.ApplicantIncome),
      CoapplicantIncome: parseFloat(formData.CoapplicantIncome),
      LoanAmount: parseFloat(formData.LoanAmount),
      Loan_Amount_Term: parseFloat(formData.Loan_Amount_Term),
      Credit_History: parseFloat(formData.Credit_History),
      CibilScore: parseInt(formData.CibilScore, 10),
    };

    try {
      const response = await axios.post('http://localhost:8000/predict', payload);
      setPrediction(response.data);
    } catch (err) {
      setError(err.response?.data?.detail || "An error occurred while connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setPrediction(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 to-green-950 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="w-full max-w-4xl z-10 relative">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <div className="p-3 bg-gradient-to-r from-primary-500 to-emerald-400 rounded-2xl shadow-lg shadow-primary-500/30">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
            Credit pulse
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Discover your loan eligibility in seconds with our advanced AI prediction system. Empowering your financial future, today.
          </p>
        </div>

        <div className="glass-panel p-8 md:p-10">
          {error && (
            <div className="mb-6 p-4 bg-red-900/30 border-l-4 border-red-500 text-red-300 rounded-md">
              {error}
            </div>
          )}

          {!prediction ? (
            <LoanForm onSubmit={handlePredict} loading={loading} />
          ) : (
            <PredictionResult result={prediction} onReset={resetForm} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
