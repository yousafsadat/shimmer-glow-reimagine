
import { GraduationCap } from 'lucide-react';

const PageHeader = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6 glow-effect scale-in floating"
           style={{ 
             boxShadow: '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2)',
             animationDelay: '0.5s'
           }}>
        <GraduationCap className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4 gradient-text">
        About the Student Outcome Prediction System
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Transforming online education through advanced machine learning and optimized feature selection
      </p>
    </div>
  );
};

export default PageHeader;
