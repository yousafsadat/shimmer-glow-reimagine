
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Brain, TrendingUp, Database, Target } from 'lucide-react';

const Methodology = () => {
  const methodologyItems = [
    {
      title: "Convolutional Neural Network (CNN)",
      description: "Detects patterns in student data, such as correlations between quiz scores and forum activity.",
      icon: <Brain className="w-5 h-5" />
    },
    {
      title: "Long Short-Term Memory (LSTM)",
      description: "Captures temporal trends, like changes in engagement over time.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Data Processing",
      description: "Normalizes 12 features using StandardScaler for effective learning.",
      icon: <Database className="w-5 h-5" />
    },
    {
      title: "Prediction",
      description: "Outputs one of four outcomes (Pass, Fail, Withdrawn, Distinction) with high accuracy.",
      icon: <Target className="w-5 h-5" />
    }
  ];

  return (
    <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-blue-700">
          <Settings className="w-6 h-6 mr-3 text-blue-500" />
          Methodology
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-6">
          The system employs a hybrid <strong className="text-blue-700">CNN+LSTM model</strong>, integrating:
        </p>
        <div className="space-y-6">
          {methodologyItems.map((item, index) => (
            <div key={index} className="flex items-start p-4 bg-gradient-to-r from-white to-blue-50 rounded-lg border border-blue-100">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 mb-2">{item.title}</h4>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Methodology;
