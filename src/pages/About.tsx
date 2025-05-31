
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb, 
  Target, 
  Settings, 
  Database, 
  Star, 
  User, 
  Users, 
  Mail,
  ExternalLink,
  GraduationCap,
  Brain,
  TrendingUp,
  BookOpen
} from 'lucide-react';

const About = () => {
  const sparkles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400 rounded-full sparkle-animation"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
      }}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6 glow-effect">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
            About the Student Outcome Prediction System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforming online education through advanced machine learning and optimized feature selection
          </p>
        </div>

        <div className="grid gap-8">
          {/* Project Overview */}
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

          {/* Objectives */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-700">
                <Target className="w-6 h-6 mr-3 text-blue-500" />
                Objectives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Develop a highly accurate model to identify students at risk, enabling timely interventions",
                  "Create an intuitive web interface for educators to input data and receive real-time predictions",
                  "Visualize key data insights through charts to support data-driven decisions",
                  "Contribute to educational research by analyzing factors influencing MOOC outcomes"
                ].map((objective, index) => (
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

          {/* Methodology */}
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
                {[
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
                ].map((item, index) => (
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

          {/* Features and Data */}
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
                {[
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
                ].map((category, index) => (
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

          {/* Project Goals */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-700">
                <Star className="w-6 h-6 mr-3 text-blue-500" />
                Project Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Develop a robust prediction tool for educators and students",
                  "Enable early identification of at-risk students to improve retention",
                  "Provide actionable insights through data visualizations",
                  "Deliver a user-friendly web platform for seamless model interaction"
                ].map((goal, index) => (
                  <div key={index} className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                    <Star className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{goal}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Supervisor */}
            <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-700">
                  <UserTie className="w-6 h-6 mr-3 text-blue-500" />
                  Supervisor & Advisor
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-700 mb-2">Main Supervisor</h4>
                  <p className="text-gray-700"><strong>Dr. Chen Tee</strong></p>
                  <p className="text-gray-600 text-sm">Strategic oversight and expertise in educational analytics</p>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-700 mb-2">Advisor</h4>
                  <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
                    <a href="https://directory.upsi.edu.my/experts/profile/02E6AC7CD9D14955" target="_blank" className="flex items-center">
                      <strong>Ts.Dr. Chee Ken Nee</strong>
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
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <Card className="backdrop-blur-md bg-white/70 border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-700">
                <Mail className="w-6 h-6 mr-3 text-blue-500" />
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">For inquiries, please contact:</p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { email: "cheekennee@meta.upsi.edu.my", name: "Ts.Dr. Chee Ken Nee" },
                  { email: "p20232002567@siswa.upsi.edu.my", name: "Shahzad Rizwan" },
                  { email: "hammadkhan3923@gmail.com", name: "Hammad Nawaz" }
                ].map((contact, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-white rounded-lg border border-blue-100 text-center">
                    <Mail className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-800" asChild>
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </Button>
                    <p className="text-gray-600 text-sm mt-1">({contact.name})</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
