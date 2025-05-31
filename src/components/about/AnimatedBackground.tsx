
import { Sparkle } from 'lucide-react';

const AnimatedBackground = () => {
  const sparkles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="absolute sparkle-animation"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      }}
    >
      <Sparkle 
        className="w-3 h-3 text-blue-400" 
        style={{
          filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.8))'
        }}
      />
    </div>
  ));

  const twinkleStars = Array.from({ length: 15 }, (_, i) => (
    <div
      key={`star-${i}`}
      className="absolute w-2 h-2 bg-blue-300 rounded-full twinkle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 4}s`,
        filter: 'drop-shadow(0 0 4px rgba(147, 197, 253, 0.8))'
      }}
    />
  ));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles}
      {twinkleStars}
      
      {/* Floating orbs with glow */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl floating glow-border" 
           style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/25 rounded-full blur-xl floating glow-border" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl floating glow-border" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/4 right-1/4 w-36 h-36 bg-purple-300/20 rounded-full blur-xl floating glow-border" 
           style={{ animationDelay: '3s' }} />
      
      {/* Additional glowing particles */}
      <div className="absolute top-10 right-20 w-4 h-4 bg-blue-400 rounded-full twinkle glow-effect" 
           style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full twinkle glow-effect" 
           style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-blue-300 rounded-full twinkle glow-effect" 
           style={{ animationDelay: '0.8s' }} />
    </div>
  );
};

export default AnimatedBackground;
