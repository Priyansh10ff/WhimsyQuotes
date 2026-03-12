export default function Footer() {
  return (
    <footer className="bg-[#fcfaff] border-t border-[#f0ebf5] py-8 text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center gap-3">
        <div className="flex gap-3 text-2xl opacity-70">
          <span>🌙</span><span>✨</span><span>🌷</span>
        </div>
        <p className="text-[#a1968d] font-medium">
          Made with lots of <span className="text-red-400">♥</span> and pastel dreams.
        </p>
        <p className="text-sm text-[#b8b0a9]">© {new Date().getFullYear()} WhimsyQuotes</p>
      </div>
    </footer>
  );
}