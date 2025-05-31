
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target } from 'lucide-react';

const Objectives = () => {
  const objectives = [
    "Develop a highly accurate model to identify students at risk, enabling timely interventions",
    "Create an intuitive web interface for educators to input data and receive real-time predictions",
    "Visualize key data insights through charts to support data-driven decisions",
    "Contribute to educational research by analyzing factors influencing MOOC outcomes"
  ];

  return (
    <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-blue-700">
          <Target className="w-6 h-6 mr-3 text-blue-500" />
          Objectives
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {objectives.map((objective, index) => (
            <div key={index} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-700">{objective}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Objectives;
