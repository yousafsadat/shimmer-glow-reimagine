
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Brain } from 'lucide-react';

const ProjectOverview = () => {
  return (
    <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-blue-700">
          <Lightbulb className="w-6 h-6 mr-3 text-blue-500" />
          Project Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          The <strong className="text-blue-700">Design and Development of a Hybrid Deep Learning Model for Student Performance Prediction in MOOCs: Integrating Optimized Feature Selection</strong> is an innovative project aimed at predicting student performance in Massive Open Online Courses (MOOCs).
        </p>
        <p className="text-gray-700 leading-relaxed">
          By leveraging a hybrid CNN+LSTM model, the system analyzes academic records, online engagement metrics, and demographic data to forecast outcomes (Pass, Fail, Withdrawn, Distinction). This enables educators to identify at-risk students early and provide targeted interventions to enhance success rates.
        </p>
        <div className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <Brain className="w-6 h-6 text-blue-500 mr-3" />
          <p className="text-blue-800 font-medium">
            Our goal is to transform online education by combining advanced machine learning with optimized feature selection, making learning more effective and accessible worldwide.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectOverview;
