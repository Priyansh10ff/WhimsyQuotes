export default function QuoteCard({ quote, isLoading, error, isLiked, onFetchNew, onToggleLike }) {
  const cardBaseClasses = "bg-[#fffdfc] p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-[#f2e8e3] relative overflow-hidden";

  if (isLoading) {
    return (
      <div className={cardBaseClasses}>
         <div className="absolute top-0 right-0 -mt-8 -mr-8 text-6xl opacity-10">🌙</div>
        <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-pulse">
          <div className="text-4xl">✨</div>
          <p className="text-lg text-[#a1968d] font-medium">Catching a falling star for you...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${cardBaseClasses} text-center`}>
        <div className="text-5xl mb-4">🌧️</div>
        <h3 className="text-2xl font-bold text-[#dba7b7] mb-3">Oh dear, a little hiccup.</h3>
        <p className="text-[#a1968d] mb-8">{error}</p>
        <button 
          className="bg-[#a8d8ea] text-[#548ca0] px-8 py-4 rounded-2xl font-bold hover:bg-[#93cbe0] hover:-translate-y-1 transition-all shadow-sm hover:shadow-md"
          onClick={onFetchNew}
        >
          Try Again 🌈
        </button>
      </div>
    );
  }

  if (!quote) return null;

  return (
    <div className={cardBaseClasses}>
      <div className="absolute top-4 left-6 text-7xl text-[#e6f7ff] opacity-50 select-none pointer-events-none">"</div>
      <div className="absolute bottom-20 right-6 text-7xl text-[#e6f7ff] opacity-50 rotate-180 select-none pointer-events-none">"</div>
      
      <div className="relative z-10">
        <div className="text-2xl md:text-4xl font-serif italic text-[#7c6a5a] mb-8 leading-relaxed text-center px-6">
          {quote.content}
        </div>
        
        <div className="flex items-center justify-center mb-10">
          <div className="h-0.5 w-12 bg-[#dba7b7] opacity-30 rounded-full"></div>
          <div className="font-bold text-[#a1968d] text-lg mx-4">
            -{quote.author}
          </div>
          <div className="h-0.5 w-12 bg-[#dba7b7] opacity-30 rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            className="bg-[#f0ebf5] text-[#9484a1] border-2 border-[#e0cffc] px-8 py-4 rounded-2xl font-bold hover:bg-[#e4ddee] hover:-translate-y-1 transition-all shadow-sm flex items-center gap-3" 
            onClick={onFetchNew} 
            disabled={isLoading}
          >
            <span>🎠</span> Another One!
          </button>
          
          <button 
            className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border-2 hover:-translate-y-1 shadow-sm ${
              isLiked 
                ? 'bg-[#fff0f5] text-[#dba7b7] border-[#ffd6e7] hover:bg-[#ffe6ef] hover:shadow-md' 
                : 'bg-white text-[#a1968d] border-[#f2e8e3] hover:border-[#dba7b7] hover:text-[#dba7b7]'
            }`}
            onClick={onToggleLike}
          >
            <span className={`text-xl ${isLiked ? 'animate-heartbeat' : ''}`}>{isLiked ? '💖' : '🤍'}</span> 
            {isLiked ? 'Saved to Collection' : 'Save This'}
          </button>
        </div>
      </div>
    </div>
  );
}
