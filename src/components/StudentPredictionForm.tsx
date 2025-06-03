
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
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 via-blue-100/20 to-blue-300/30 animate-pulse"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"
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
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={el => sparkleRefs.current[i] = el!}
          className="absolute text-blue-500 opacity-60"
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
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 shadow-lg">
            <GraduationCap className="text-blue-600" size={32} />
            <h1 className="text-4xl font-bold text-blue-900">
              Student Outcome Prediction
            </h1>
          </div>
          <p className="text-xl text-blue-700 font-medium">
            Advisor: Dr. Chee Ken Nee
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
                      ? 'bg-blue-600 shadow-lg shadow-blue-600/50' 
                      : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full bg-blue-100 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-500 shadow-lg shadow-blue-600/50"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Section */}
        <Card className="form-section max-w-2xl mx-auto bg-white/90 backdrop-blur-xl border-blue-200 shadow-2xl shadow-blue-500/20">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {currentSection + 1}
              </div>
              {sections[currentSection].title}
            </h2>

            <div className="space-y-6">
              {sections[currentSection].fields.map((field) => (
                <div key={field.key} className="space-y-2">
                  <Label className="text-blue-800 font-medium">{field.label}</Label>
                  {field.type === 'select' ? (
                    <Select onValueChange={(value) => handleInputChange(field.key, value)}>
                      <SelectTrigger className="bg-white/70 border-blue-300 text-blue-900 focus:border-blue-500 focus:ring-blue-500/50 backdrop-blur-sm">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-blue-200">
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option} className="text-blue-900 hover:bg-blue-50">
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
                      className="bg-white/70 border-blue-300 text-blue-900 focus:border-blue-500 focus:ring-blue-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
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
                className="border-blue-300 text-blue-700 hover:bg-blue-50 disabled:opacity-50"
              >
                Previous
              </Button>

              {currentSection === sections.length - 1 ? (
                <Button
                  onClick={handlePredict}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <TrendingUp className="mr-2" size={20} />
                  Predict Outcome
                </Button>
              ) : (
                <Button
                  onClick={nextSection}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Prediction Result */}
        {prediction && (
          <Card className="prediction-result max-w-xl mx-auto mt-8 bg-blue-50/90 backdrop-blur-xl border-blue-300 shadow-2xl shadow-blue-500/30">
            <div className="p-8 text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Prediction Result</h3>
              </div>
              <p className="text-3xl font-bold text-blue-800">
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
