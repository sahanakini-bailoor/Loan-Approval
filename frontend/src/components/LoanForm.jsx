import { useState } from 'react';
import { Send, TrendingUp, CreditCard, Home, Briefcase, GraduationCap, Users } from 'lucide-react';

export default function LoanForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    Gender: 'Male',
    Married: 'Yes',
    Dependents: '0',
    Education: 'Graduate',
    Self_Employed: 'No',
    ApplicantIncome: '5000',
    CoapplicantIncome: '0',
    LoanAmount: '150',
    Loan_Amount_Term: '360',
    Credit_History: '1.0',
    CibilScore: '700',
    Property_Area: 'Urban',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center space-x-2 mt-6 mb-4 text-primary-400 border-b border-primary-900/30 pb-2">
      <Icon className="w-5 h-5" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Personal Details */}
        <div className="col-span-1 md:col-span-2">
          <SectionTitle icon={Users} title="Personal Information" />
        </div>

        <div>
          <label className="label-text">Gender</label>
          <select name="Gender" value={formData.Gender} onChange={handleChange} className="input-field">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label className="label-text">Marital Status</label>
          <select name="Married" value={formData.Married} onChange={handleChange} className="input-field">
            <option value="Yes">Married</option>
            <option value="No">Single</option>
          </select>
        </div>

        <div>
          <label className="label-text">Dependents</label>
          <select name="Dependents" value={formData.Dependents} onChange={handleChange} className="input-field">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3 or more</option>
          </select>
        </div>

        {/* Education & Employment */}
        <div className="col-span-1 md:col-span-2">
          <SectionTitle icon={Briefcase} title="Professional Background" />
        </div>

        <div>
          <label className="label-text">Education</label>
          <select name="Education" value={formData.Education} onChange={handleChange} className="input-field">
            <option value="Graduate">Graduate</option>
            <option value="Not Graduate">Not Graduate</option>
          </select>
        </div>

        <div>
          <label className="label-text">Self Employed</label>
          <select name="Self_Employed" value={formData.Self_Employed} onChange={handleChange} className="input-field">
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Financial Details */}
        <div className="col-span-1 md:col-span-2">
          <SectionTitle icon={TrendingUp} title="Financial Overview" />
        </div>

        <div>
          <label className="label-text">Applicant Income ($/month)</label>
          <input type="number" name="ApplicantIncome" value={formData.ApplicantIncome} onChange={handleChange} className="input-field" required min="0" />
        </div>

        <div>
          <label className="label-text">Coapplicant Income ($/month)</label>
          <input type="number" name="CoapplicantIncome" value={formData.CoapplicantIncome} onChange={handleChange} className="input-field" required min="0" />
        </div>

        {/* Loan Details */}
        <div className="col-span-1 md:col-span-2">
          <SectionTitle icon={CreditCard} title="Loan Requirements" />
        </div>

        <div>
          <label className="label-text">Loan Amount (in Thousands $)</label>
          <input type="number" name="LoanAmount" value={formData.LoanAmount} onChange={handleChange} className="input-field" required min="1" />
        </div>

        <div>
          <label className="label-text">Loan Term (Days)</label>
          <select name="Loan_Amount_Term" value={formData.Loan_Amount_Term} onChange={handleChange} className="input-field">
            <option value="120">120 Days</option>
            <option value="180">180 Days</option>
            <option value="300">300 Days</option>
            <option value="360">360 Days</option>
            <option value="480">480 Days</option>
          </select>
        </div>

        <div>
          <label className="label-text">Credit History</label>
          <select name="Credit_History" value={formData.Credit_History} onChange={handleChange} className="input-field">
            <option value="1.0">Meets Guidelines (Good)</option>
            <option value="0.0">Does Not Meet Guidelines (Poor)</option>
          </select>
        </div>

        <div>
          <label className="label-text">CIBIL Score (300-900)</label>
          <input type="number" name="CibilScore" value={formData.CibilScore} onChange={handleChange} className="input-field" required min="300" max="900" />
        </div>

        <div>
          <label className="label-text">Property Area</label>
          <select name="Property_Area" value={formData.Property_Area} onChange={handleChange} className="input-field">
            <option value="Urban">Urban</option>
            <option value="Semiurban">Semiurban</option>
            <option value="Rural">Rural</option>
          </select>
        </div>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 text-white text-lg font-bold rounded-xl bg-gradient-to-r from-primary-600 to-emerald-500 hover:from-primary-500 hover:to-emerald-400 focus:outline-none focus:ring-4 focus:ring-primary-500/50 shadow-lg shadow-primary-500/30 transform transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
        >
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
          ) : (
            <>
              <span>Predict My Eligibility</span>
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
