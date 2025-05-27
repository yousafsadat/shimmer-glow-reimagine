
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, GraduationCap, TrendingUp } from 'lucide-react';

const StudentPredictionForm = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    previousAttempts: '',
    studiedCredits: '',
    forumInteractions: '',
    contentInteractions: '',
    quizInteractions: '',
    resourceInteractions: '',
    aLevelEducation: '',
    heQualification: '',
    imdDeprivedBand: '',
    imdLeastDeprivedBand: '',
    ageRange: '',
    disability: ''
  });
  const [prediction, setPrediction] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const sparkleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Initial animations
    gsap.from(containerRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out"
    });

    // Continuous sparkle animation
    const sparkleAnimation = () => {
      sparkleRefs.current.forEach((sparkle, index) => {
        if (sparkle) {
          gsap.to(sparkle, {
            rotation: 360,
            duration: 2 + index * 0.5,
            repeat: -1,
            ease: "none"
          });
          
          gsap.to(sparkle, {
            scale: 1.2,
            duration: 1 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut"
          });
        }
      });
    };

    sparkleAnimation();
  }, []);

  const sections = [
    {
      title: "Academic Information",
      fields: [
        { key: 'previousAttempts', label: 'Number of Previous Attempts (0-5)', type: 'number', min: 0, max: 5 },
        { key: 'studiedCredits', label: 'Studied Credits (30-200)', type: 'number', min: 30, max: 200 }
      ]
    },
    {
      title: "Engagement Metrics",
      fields: [
        { key: 'forumInteractions', label: 'Forum Interactions (0-100)', type: 'number', min: 0, max: 100 },
        { key: 'contentInteractions', label: 'Content Interactions (0-200)', type: 'number', min: 0, max: 200 },
        { key: 'quizInteractions', label: 'Quiz Interactions (0-50)', type: 'number', min: 0, max: 50 },
        { key: 'resourceInteractions', label: 'Resource Interactions (0-100)', type: 'number', min: 0, max: 100 }
      ]
    },
    {
      title: "Demographic Information",
      fields: [
        { key: 'aLevelEducation', label: 'Highest Education: A Level or Equivalent', type: 'select', options: ['No', 'Yes'] },
        { key: 'heQualification', label: 'Highest Education: HE Qualification', type: 'select', options: ['No', 'Yes'] },
        { key: 'imdDeprivedBand', label: 'IMD Band: 0-10% (Most Deprived)', type: 'select', options: ['No', 'Yes'] },
        { key: 'imdLeastDeprivedBand', label: 'IMD Band: 90-100% (Least Deprived)', type: 'select', options: ['No', 'Yes'] },
        { key: 'ageRange', label: 'Age Band: 0-35 Years', type: 'select', options: ['No', 'Yes'] },
        { key: 'disability', label: 'Disability', type: 'select', options: ['No', 'Yes'] }
      ]
    }
  ];

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      gsap.to('.form-section', {
        x: -100,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentSection(currentSection + 1);
          gsap.fromTo('.form-section', 
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3 }
          );
        }
      });
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      gsap.to('.form-section', {
        x: 100,
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentSection(currentSection - 1);
          gsap.fromTo('.form-section', 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3 }
          );
        }
      });
    }
  };

  const handlePredict = () => {
    // Simple prediction logic based on engagement metrics
    const engagement = parseInt(formData.forumInteractions || '0') + 
                     parseInt(formData.contentInteractions || '0') + 
                     parseInt(formData.quizInteractions || '0') + 
                     parseInt(formData.resourceInteractions || '0');
    
    const credits = parseInt(formData.studiedCredits || '0');
    const attempts = parseInt(formData.previousAttempts || '0');
    
    let outcome = "Pass";
    let confidence = 75;
    
    if (engagement > 150 && credits > 100 && attempts <= 1) {
      outcome = "Distinction";
      confidence = 95;
    } else if (engagement > 100 && credits > 60 && attempts <= 2) {
      outcome = "Pass";
      confidence = 85;
    } else if (engagement < 50 || attempts > 3) {
      outcome = "Fail";
      confidence = 70;
    }
    
    setPrediction(`${outcome} (${confidence}% confidence)`);
    
    // Animate prediction result
    gsap.from('.prediction-result', {
      scale: 0,
      rotation: 360,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Sparkle Elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={el => sparkleRefs.current[i] = el!}
          className="absolute text-yellow-300 opacity-60"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        >
          <Sparkles size={16 + Math.random() * 16} />
        </div>
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
            <GraduationCap className="text-cyan-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              Student Outcome Prediction
            </h1>
          </div>
          <p className="text-xl text-blue-200 font-medium">
            advisor: Ts.Dr.Chee Ken Nee
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex space-x-4">
              {sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index <= currentSection 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50' 
                      : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 shadow-lg shadow-cyan-400/50"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Section */}
        <Card className="form-section max-w-2xl mx-auto bg-black/40 backdrop-blur-xl border-gray-700/50 shadow-2xl shadow-purple-500/20">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold">
                {currentSection + 1}
              </div>
              {sections[currentSection].title}
            </h2>

            <div className="space-y-6">
              {sections[currentSection].fields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <Label className="text-gray-300 font-medium">{field.label}</Label>
                  {field.type === 'select' ? (
                    <Select onValueChange={(value) => handleInputChange(field.key, value)}>
                      <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option} className="text-white hover:bg-gray-700">
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      type={field.type}
                      min={field.min}
                      max={field.max}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className="bg-gray-800/50 border-gray-600 text-white focus:border-cyan-400 focus:ring-cyan-400/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevSection}
                disabled={currentSection === 0}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 disabled:opacity-50"
              >
                Previous
              </Button>

              {currentSection === sections.length - 1 ? (
                <Button
                  onClick={handlePredict}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold px-8 shadow-lg shadow-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40"
                >
                  <TrendingUp className="mr-2" size={20} />
                  Predict Outcome
                </Button>
              ) : (
                <Button
                  onClick={nextSection}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold px-8 shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Prediction Result */}
        {prediction && (
          <Card className="prediction-result max-w-xl mx-auto mt-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border-green-400/30 shadow-2xl shadow-green-500/30">
            <div className="p-8 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Prediction Result</h3>
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                {prediction}
              </p>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default StudentPredictionForm;
