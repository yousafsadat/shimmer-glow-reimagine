
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Users, ExternalLink } from 'lucide-react';

const Team = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Supervisor */}
      <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-blue-700">
            <User className="w-6 h-6 mr-3 text-blue-500" />
            Supervisor & Advisor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-700 mb-2">Main Supervisor</h4>
            <p className="text-gray-700"><strong>Dr. Chee Ken Nee</strong></p>
            <p className="text-gray-600 text-sm">Strategic oversight and expertise in educational analytics</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
            <h4 className="font-semibold text-blue-700 mb-2">Advisor</h4>
            <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
              <a href="https://directory.upsi.edu.my/experts/profile/02E6AC7CD9D14955" target="_blank" className="flex items-center">
                <strong>Dr. Chee Ken Nee</strong>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <p className="text-gray-600 text-sm">Technical insights into machine learning and deep learning methodologies</p>
          </div>
        </CardContent>
      </Card>

      {/* Contributors */}
      <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-blue-700">
            <Users className="w-6 h-6 mr-3 text-blue-500" />
            Contributors
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
            <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
              <a href="https://scholar.google.com/citations?user=pewLS_oAAAAJ&hl=en" target="_blank" className="flex items-center">
                <strong>Shahzad Rizwan</strong>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <p className="text-gray-600 text-sm">Model development and web implementation</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
            <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
              <a href="https://www.linkedin.com/in/hammad-nawaz-25b998253/" target="_blank" className="flex items-center">
                <strong>Hammad Nawaz</strong>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <p className="text-gray-600 text-sm">Data processing and system integration</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
            <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
              <a href="https://www.linkedin.com/in/yousaf-sadat-a4b20b2b3/" target="_blank" className="flex items-center">
                <strong>Yousaf Sadat</strong>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <p className="text-gray-600 text-sm">Frontend React Developer</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Team;
