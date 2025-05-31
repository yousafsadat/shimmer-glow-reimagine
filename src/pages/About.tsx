
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
        <PageHeader />

        <div className="grid gap-8">
          {/* Project Overview */}
          <ProjectOverview />

          {/* Objectives */}
          <Objectives />

          {/* Methodology */}
          <Methodology />

          {/* Features and Data */}
          <FeaturesAndData />

          {/* Project Goals */}
          <ProjectGoals />

          {/* Team Section */}
          <Team />

          {/* Contact */}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
