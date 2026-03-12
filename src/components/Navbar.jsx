export default function Navbar({ likeCount }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#f0ebf5] py-4 px-6 shadow-sm transition-all">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌷</span>
          <h1 className="text-xl font-bold text-[#8b7e74] tracking-tight">WhimsyQuotes</h1>
        </div>
        <div>
          <span className="bg-[#fff0f5] text-[#dba7b7] px-3 py-1.5 rounded-full text-sm font-bold shadow-sm border border-[#ffd6e7] flex items-center gap-1.5">
            ❤️ <span className="text-[#8b7e74]">{likeCount} Collection</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
