
import StudentPredictionForm from '@/components/StudentPredictionForm';
import { Button } from '@/components/ui/button';
import { Info, Brain, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Student Outcome Prediction
          </h1>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link to="/graphs" className="flex items-center">
                <BarChart3 className="w-4 h-4 mr-2" />
                Graphs
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link to="/model" className="flex items-center">
                <Brain className="w-4 h-4 mr-2" />
                Model
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              <Link to="/about" className="flex items-center">
                <Info className="w-4 h-4 mr-2" />
                About
              </Link>
            </Button>
          </div>
        </div>
        
        <StudentPredictionForm />
      </div>
    </div>
  );
};

export default Index;
