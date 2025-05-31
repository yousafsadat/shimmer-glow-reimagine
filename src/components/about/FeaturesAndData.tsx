
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, BookOpen, TrendingUp, Users } from 'lucide-react';

const FeaturesAndData = () => {
  const categories = [
    {
      title: "Academic Background",
      items: ["Previous course attempts", "Studied credits"],
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Engagement Metrics",
      items: ["Forum participation", "Content views", "Quiz attempts", "Resource usage"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Demographic Details",
      items: ["Education level", "Socio-economic status", "Age", "Disability"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-blue-700">
          <Database className="w-6 h-6 mr-3 text-blue-500" />
          Features and Data
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-6">
          The model uses 12 carefully selected features, categorized as:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h4 className="font-semibold text-blue-700">{category.title}</h4>
              </div>
              <ul className="space-y-1">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturesAndData;
