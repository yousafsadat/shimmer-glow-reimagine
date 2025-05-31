
const AnimatedBackground = () => {
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default AnimatedBackground;
