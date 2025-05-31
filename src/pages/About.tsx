
import AnimatedBackground from '@/components/about/AnimatedBackground';
import PageHeader from '@/components/about/PageHeader';
import ProjectOverview from '@/components/about/ProjectOverview';
import Objectives from '@/components/about/Objectives';
import Methodology from '@/components/about/Methodology';
import FeaturesAndData from '@/components/about/FeaturesAndData';
import ProjectGoals from '@/components/about/ProjectGoals';
import Team from '@/components/about/Team';
import Contact from '@/components/about/Contact';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <AnimatedBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <div className="fade-in" style={{ animationDelay: '0.1s' }}>
          <PageHeader />
        </div>

        <div className="grid gap-8">
          {/* Project Overview */}
          <div className="fade-in" style={{ animationDelay: '0.2s' }}>
            <ProjectOverview />
          </div>

          {/* Objectives */}
          <div className="fade-in" style={{ animationDelay: '0.3s' }}>
            <Objectives />
          </div>

          {/* Methodology */}
          <div className="fade-in" style={{ animationDelay: '0.4s' }}>
            <Methodology />
          </div>

          {/* Features and Data */}
          <div className="fade-in" style={{ animationDelay: '0.5s' }}>
            <FeaturesAndData />
          </div>

          {/* Project Goals */}
          <div className="fade-in" style={{ animationDelay: '0.6s' }}>
            <ProjectGoals />
          </div>

          {/* Team Section */}
          <div className="fade-in" style={{ animationDelay: '0.7s' }}>
            <Team />
          </div>

          {/* Contact */}
          <div className="fade-in" style={{ animationDelay: '0.8s' }}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
