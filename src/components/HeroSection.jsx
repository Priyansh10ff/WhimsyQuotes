export default function HeroSection({ backgroundImageUrl, onScrollClick }) {
  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundColor: '#e6f7ff'
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl mt-[-5vh]">
        <span className="text-4xl md:text-5xl mb-4 block animate-bounce">☁️</span>
        <h1 className="text-4xl md:text-6xl font-black text-[#7c6a5a] leading-tight drop-shadow-sm mb-6">
          Gathering Star Dust & <br/> Happy Thoughts.
        </h1>
        <p className="text-xl text-[#8b7e74] font-medium bg-white/50 inline-block px-6 py-3 rounded-2xl backdrop-blur-md shadow-sm">
          Your daily corner for positivity and gentle inspiration.
        </p>
      </div>
      
      <button 
        onClick={onScrollClick}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white/80 hover:bg-white text-[#dba7b7] p-4 rounded-full shadow-md backdrop-blur-md transition-all hover:shadow-lg hover:scale-110 animate-pulse"
        aria-label="Scroll down to quotes"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>
  );
}
