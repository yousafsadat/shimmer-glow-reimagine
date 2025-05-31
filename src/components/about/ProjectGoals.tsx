
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ProjectGoals = () => {
  const goals = [
    "Develop a robust prediction tool for educators and students",
    "Enable early identification of at-risk students to improve retention",
    "Provide actionable insights through data visualizations",
    "Deliver a user-friendly web platform for seamless model interaction"
  ];

  return (
    <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-blue-700">
          <Star className="w-6 h-6 mr-3 text-blue-500" />
          Project Goals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
              <Star className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
              <p className="text-gray-700">{goal}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectGoals;
